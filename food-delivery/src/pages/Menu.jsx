import { useDispatch, useSelector } from "react-redux";
import FoodList from "../components/FoodList";
import SearchForm from "../components/SearchForm";
import { selectAllProducts } from "../features/product/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { useState, useMemo } from "react";
import Button from "../components/button";

const Menu = () => {
  const foodItems = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  const filteredItems = useMemo(() => {
    return foodItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }, [searchTerm, foodItems]);



  const filteredByCategory = useMemo(() => {
    if (!selectedCategory) return filteredItems;
    return filteredItems.filter(item => item.category === selectedCategory);
  }, [filteredItems, selectedCategory]);

  const uniqueCategories = useMemo(() => {
    const categories = filteredItems.map(item => item.category);
    return [...new Set(categories)];
  }, [filteredItems]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(search);
  };

  const handleCategories = (item) => {
    setSelectedCategory(item);
  };

  const resetFilter = () => {
  setSelectedCategory(null);
  setSearch('');
  setSearchTerm('')
  };

  return (
    <section className="space-y-10">
      <SearchForm
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onSubmit={handleSearch}
      />

   
    
     {
      filteredItems.length > 0 ? (
         <>
         <div className="w-full flex justify-center items-center gap-4 text-lg overflow-x-auto p-2">
        {uniqueCategories.map((item, i) => (
          <button
            onClick={() => handleCategories(item)}
            key={i}
            className="cursor-pointer px-4 py-2 rounded text-white font-semibold bg-accentColor"
          >
            {item}
          </button>
        ))}

        {selectedCategory && (
          <button className="text-white font-semibold p-2  rounded bg-red-500" onClick={resetFilter}>
            Reset Filter
          </button>
        )}
      </div>

      <FoodList foodItems={filteredByCategory} addItemToCart={addItemToCart} />
    </>
      ):(
        <p className="text-center text-red-500 font-semibold">Item not found.. 😭🍔</p>
      )
     }
    </section>
  );
};

export default Menu;
