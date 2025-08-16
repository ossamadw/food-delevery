import AddToCartBtn from "../../../components/AddToCartBtn";
import QuantityOrder from "../../../components/QuantityOrder";


const MenuItemInfo = ({currentItem , cartItem , isAdded , addItemToCart , increaseQuantity , decreaseQuantity}) => {
  return (
    <div className=" space-y-4 md:space-y-6 order-2 text-start">
      <div className="space-y-2 md:space-y-4">
        <span className="font-semibold text-white p-2 bg-accentColor rounded">
          {currentItem.category}
        </span>
        <h1 className="text-2xl md:text-4xl font-bold text-secondaryColor">
          {currentItem.name}
        </h1>
      </div>

      <h3 className="font-semibold text-lg text-primaryColor">
        {currentItem.currentPrice}$
      </h3>

      <p className="text-textColor">{currentItem.description}</p>

      {currentItem &&
        (!isAdded ? (
          <AddToCartBtn onClick={() => addItemToCart(currentItem)} />
        ) : (
          <QuantityOrder
            className="py-2"
            increaseQuantity={() => increaseQuantity(currentItem)}
            decreaseQuantity={() => decreaseQuantity(currentItem)}
            value={cartItem?.quantity ?? 1}
          />
        ))}
    </div>
  );
};

export default MenuItemInfo;
