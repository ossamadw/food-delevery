
const QuantityOrder = ({ value = 1,  increaseQuantity, decreaseQuantity , className }) => {
  return (
    <div className={`p-1.5 ring-2 ring-primaryColor rounded-full flex justify-between items-center max-w-[900px] mx-auto ${className}`}>
      <button
        aria-label="Decrease quantity"
        className="rounded-full hover:bg-slate-100 py-1 px-3"
        min='1'
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span>{value}</span>
      <button
        aria-label="Increase quantity"
        className="rounded-full hover:bg-slate-100 py-1 px-3"
        max='99'
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantityOrder;
