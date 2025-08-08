import { useDispatch, useSelector } from "react-redux";
import CartSummary from "../components/CartSummary";
import { removeFromCart , decreaseQuantity , increaseQuantity, selectCartItems } from "../features/cart/cartSlice";
import QuantityOrder from "../components/QuantityOrder";
import FoodImage from "../components/FoodImage";

const Cart = () => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const calculateTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.currentPrice * item.quantity,
      0
    );
  };

  const decrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const increase = (item) => {
    dispatch(increaseQuantity(item));
  };

  return (
    <main className="p-5 pb-48 grid grid-cols-1 lg:grid-cols-4 gap-5">
      <section className="p-2 lg:col-span-3 overflow-x-auto">
        {items.length > 0 ? (
          <table className="table-auto w-full text-sm text-left text-gray-800 cursor-pointer">
            <thead>
              <tr className="px-6 text-gray-700 py-3  rounded-s-lg text-center">
                <th className="md:px-6 py-4">Product</th>
                <th className="md:px-6 py-4">Name</th>
                <th className="md:px-6 py-4">Quantity</th>
                <th className="md:px-6 py-4">Unit Price</th>
                <th className="md:px-6 py-4">Total Price</th>
                <th className="md:px-6 py-4 text-primary-color">Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white md:text-lg border-b text-center"
                >
                  <td className="p-1">
                    <FoodImage src={item.image}  alt={item.name} id={item.id} className="h-20 rounded-lg w-20 m-auto "  />
                  </td>
                  <td className="text-sm">{item.name}</td>
                  <td className="px-6 py-4">
                    <QuantityOrder 
                      increaseQuantity={() => increase(item)}
                      decreaseQuantity={() => decrease(item)}
                      value={item.quantity}
                    />
                  </td>
                  <td className="px-6 py-4">{item.currentPrice}$</td>
                  <td className="px-6 py-4">
                    {(item.currentPrice * item.quantity).toFixed(2)}$
                  </td>
                  <td>
                    <button
                      type="button"
                      className=" border-2 hover:border-red-500 transition-all px-2 py-1 rounded"
                      aria-label="Remove BBQ Ribs Plate from cart"
                      title={`delete ${item.name} ?`}
                      onClick={() => removeItem(item)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-5 items-center p-0">
            <div>
              <h1 className="font-bold text-gray-700 text-lg mb-3">
                Your Cart is Empty 🙂
              </h1>
            </div>
            <img
              src="https://img.freepik.com/premium-vector/hungry-man-concept-illustration_114360-16580.jpg"
              alt="Empty cart illustration"
              className="w-full md:w-1/2 lg:w-full h-auto"
            />
          </div>
        )}
      </section>

      <CartSummary total={calculateTotalPrice().toFixed(2)} items={items} />
    </main>
  );
};

export default Cart;
