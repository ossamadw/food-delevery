import { useState } from "react";
import CheckOutForm from "../components/CheckOutForm";
import CartSummary from "../features/cart/components/CartSummary";
import Button from "../components/button";
import OrderSummary from "../components/OrderSummary";

const CheckOut = () => {
  const [formData, setFormData] = useState({});
  return (
    <main className="my-5 py-5 p-5">
      <Button className="mb-5">Back</Button>

      <section className="grid-cols-1 grid md:grid-cols-2 gap-5">

        {/* checkout form */}
        <CheckOutForm formData={formData} />

        {/* Order Summary */}
        <OrderSummary />
        
      </section>
    </main>
  );
};

export default CheckOut;
