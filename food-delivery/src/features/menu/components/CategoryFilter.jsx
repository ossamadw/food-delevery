const CategoryFilter = ({categories , selectedCategory  , handleCategories , resetFilter}) => {

  return (
    <div className="w-full flex justify-center text-sm items-center gap-4  overflow-x-auto p-2">
      {categories.map((item, i) => (
        <button
          onClick={() => handleCategories(item)}
          key={i}
          className="cursor-pointer px-4 py-2  rounded text-white font-semibold bg-accentColor"
        >
          {item}
        </button>
      ))}

      {selectedCategory && (
        <button
          className="text-white font-semibold p-2  rounded bg-red-500"
          onClick={resetFilter}
        >
          Reset Filter
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;
