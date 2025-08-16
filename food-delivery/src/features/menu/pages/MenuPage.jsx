import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import { useState, useMemo } from "react";
import SearchForm from "../../../components/SearchForm";
import MenuList from "../components/MenuList";
import { selectAllItmes } from "../menuSlice";
import CategoryFilter from "../components/CategoryFilter";

const MenuPage = () => {
  const foodItems = useSelector(selectAllItmes);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  const filteredItems = useMemo(() => {
    return foodItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }, [searchTerm, foodItems]);

  const filteredByCategory = useMemo(() => {
    if (!selectedCategory) return filteredItems;
    return filteredItems.filter((item) => item.category === selectedCategory);
  }, [filteredItems, selectedCategory]);

  const uniqueCategories = useMemo(() => {
    const categories = filteredItems.map((item) => item.category);
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
    setSearch("");
    setSearchTerm("");
  };

  return (
    <section className="space-y-10">

      <SearchForm
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onSubmit={handleSearch}
      />

      {filteredItems.length > 0 ? (
        <>
          <CategoryFilter
            categories={uniqueCategories}
            handleCategories={handleCategories}
            selectedCategory={selectedCategory}
            resetFilter={resetFilter}
          />

          <MenuList
            foodItems={filteredByCategory}
            addItemToCart={addItemToCart}
          /> 
        </>
      ) : (
        <p className="text-center text-red-500 font-semibold">
          Item not found.. 😭🍔
        </p>
      )}
    </section>
  );
};

export default MenuPage;
