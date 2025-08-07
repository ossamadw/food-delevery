import AddToCartBtn from "./AddToCartBtn";

const FoodCard = ({image , name , currentPrice , oldPrice , addItemToCart }) => {
  return (
    <article className="space-y-2 cursor-pointer">
      <div className="overflow-hidden rounded-2xl bg-gray-50">
        <div className="flex items-center h-[200px] overflow-hidden">
          <img
            src={image}
            alt={name }
            className="hover:scale-105 transition-all"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <h2 className="mt-2 text-lg font-semibold text-gray-800">
            {name }
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
