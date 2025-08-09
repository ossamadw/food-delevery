import FoodCard from "./FoodCard";

const FoodList = ({ foodItems, addItemToCart }) => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {foodItems.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          image={food.image}
          name={food.name}
          oldPrice={food.oldPrice}
          currentPrice={food.currentPrice}
          addItemToCart={() => addItemToCart(food)}
        />
      ))}
    </div>
  );
};

export default FoodList;
