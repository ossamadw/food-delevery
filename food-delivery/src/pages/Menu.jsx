import { useDispatch, useSelector } from "react-redux";
import FoodList from "../components/FoodList";
import SearchForm from "../components/SearchForm";
import { selectAllProducts } from "../features/product/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { useState } from "react";

const Menu = () => {


  const foodItems = useSelector(selectAllProducts);
  const dispatch = useDispatch()
  const [search , setSearch] = useState('');
  const [searchTerm , setSearchTerm] = useState('')

  const addItemToCart = (item) => {
    dispatch(addToCart(item))
  };

  const filtredItems = foodItems.filter((item)=>(
    item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase().trim())
  ))
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(search)
  }

  return (
    <section className="space-y-10">
      <SearchForm onChange={(e)=> setSearch(e.target.value)} value={search} onSubmit={handleSubmit}  />
      <FoodList foodItems={filtredItems} addItemToCart={addItemToCart} />
    </section>
  );
};

export default Menu;
