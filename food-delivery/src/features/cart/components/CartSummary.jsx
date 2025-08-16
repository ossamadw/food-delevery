import { NavLink } from "react-router-dom";
import Button from "../../../components/button";
const CartSummary = ({ total, items = 0 }) => {
  return (
    <aside className="p-5 h-fit sticky top-5 bg-slate-50 text-lg font-semibold text-gray-600 rounded-lg">
      {items.length > 0 ? (
        <div>
          <h1 className="font-bold mb-2">Your Cart Summary</h1>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            Total: {total}
          </h3>

          <div className="mt-3">
            <Button type="button">
              <NavLink to="/checkout">Proceed to Checkout</NavLink>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="font-bold  mb-2 text-center">
            Your burger 🍔 is just one click away
          </h1>
          <div className="mt-3">
            <Button type="button" className="w-full">
              <NavLink to="/menu">Go to menu</NavLink>
            </Button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default CartSummary;
