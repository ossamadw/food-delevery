import { NavLink, useParams } from "react-router-dom";
import QuantityOrder from "../components/QuantityOrder";
import AddToCartBtn from "../components/AddToCartBtn";
import { selectAllProducts } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import FoodList from "../components/FoodList";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectIsAdded,
} from "../features/cart/cartSlice";
import FoodImage from "../components/FoodImage";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allItems = useSelector(selectAllProducts);
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
                increaseQuantity={() => increase(currentItem)}
                decreaseQuantity={() => decrease(currentItem)}
                value={cartItem?.quantity ?? 1}
              />
            ))}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <>
          <h1 className="text-3xl text-primaryColor font-bold">You may Like</h1>
          <FoodList foodItems={relatedProducts} addItemToCart={addItemToCart} />
        </>
      )}
    </section>
  );
};

export default ProductDetails;
