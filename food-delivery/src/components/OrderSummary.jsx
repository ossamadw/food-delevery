const OrderSummary = ({
  totalItems = 0,
  totalCharges = 0,
  shipping = 0,
  estimatedTotal = 0
}) => {
  return (
    <section className="p-5 h-fit -order-last md:-order-first flex flex-col gap-3 bg-slate-50 text-lg font-semibold text-gray-600">
      <h1 className="font-bold">Order Summary</h1>

      <div className="flex justify-between">
        <h3 className="text-xl font-medium text-gray-700">Total items :</h3>
        <span>{totalItems}</span>
      </div>

      <div className="flex justify-between">
        <h3 className="text-xl font-medium text-gray-700">Total charges :</h3>
        <span>${totalCharges.toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <h3 className="text-xl font-medium text-gray-700">Shipping :</h3>
        <span>${shipping.toFixed(2)}</span>
      </div>

      <hr />

      <div className="flex justify-between">
        <h3 className="text-xl font-medium text-gray-700">Estimated Total :</h3>
        <span>${estimatedTotal.toFixed(2)}</span>
      </div>
    </section>
  );
};

export default OrderSummary;
