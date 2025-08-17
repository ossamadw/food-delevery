import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { addToCart } from "../../cart/cartSlice";
import CategoryFilter from "../components/CategoryFilter";
import SearchForm from "../../../components/SearchForm";
import MenuList from "../components/MenuList";
import { fetchItems, getItemsError, getItemsStatus, selectAllItems } from "../menuSlice";

const MenuPage = () => {
  const foodItems = useSelector(selectAllItems);
  const menuStatus = useSelector(getItemsStatus);
  const error = useSelector(getItemsError);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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

  //  Loading
  if (menuStatus === true) return <p className="text-center">Loading menu...</p>;

  //  Error
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

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
