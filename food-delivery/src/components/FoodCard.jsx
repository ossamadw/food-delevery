import { NavLink } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";
import FoodImage from "./FoodImage";

const FoodCard = ({ id , image , name , currentPrice , oldPrice , addItemToCart }) => {
  return (
    <article className="space-y-2 cursor-pointer">

      <FoodImage src={image} alt={name} id={id} className="h-[200px]" />
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <h2 className="mt-2 text-lg font-semibold text-gray-800">
            <NavLink to={`/product/${id}`} >{name}</NavLink>
          </h2>
          
          <div className="flex gap-2 items-center">
            <del className="text-gray-500 text-sm">{oldPrice}</del>
            <h3 className="text-green-600 font-semibold text-lg">{currentPrice}</h3>
          </div>
        </div>
        

        <AddToCartBtn onClick={addItemToCart} />
      </div>
    </article>
  );
};

export default FoodCard;
