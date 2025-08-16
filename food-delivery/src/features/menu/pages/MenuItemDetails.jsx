import { useParams } from "react-router-dom";
import { selectAllItmes } from "../menuSlice";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "../components/MenuList";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectIsAdded,
} from "../../cart/cartSlice";
import FoodImage from "../../../components/FoodImage";
import MenuItemInfo from "../components/MenuItemInfo";

const MenuItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allItems = useSelector(selectAllItmes);
  const currentItem = allItems.find((it) => it.id === parseInt(id));
  
  const relatedProducts = allItems.filter(
    (product) =>
      product.category === currentItem?.category &&
      product.id !== currentItem?.id
  );

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  // check if the product is on the cart or no
  const isAdded = useSelector(selectIsAdded(currentItem.id));

  const decrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const increase = (item) => {
    dispatch(increaseQuantity(item));
  };

  // find the quantity of this product in the shoppingCart
  const cartItem = useSelector((state) =>
    state.cart.cartItems.find((item) => item.id === currentItem.id)
  );

  return (
    <section className="p-2 md:p-10 border-2 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Product Image */}
        <FoodImage
          src={currentItem.image}
          alt={currentItem.name}
          id={currentItem.id}
          className={"w-full h-full md:h-96"}
        />
        {/* Product Info */}
        <MenuItemInfo
          currentItem={currentItem}
          cartItem={cartItem}
          isAdded={isAdded}
          increaseQuantity={increase}
          decreaseQuantity={decrease}
          addItemToCart={addItemToCart}
        />
      </div>

      {relatedProducts.length > 0 && (
        <>
          <h1 className="text-3xl text-primaryColor font-bold">You may Like</h1>
          <MenuList foodItems={relatedProducts} addItemToCart={addItemToCart} />
        </>
      )}
    </section>
  );
};

export default MenuItemDetail;
