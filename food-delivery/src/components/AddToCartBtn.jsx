const AddToCartBtn = ({onClick}) => {

  return (
    
    <button
      type="button"
      className="inline-block shadow w-full px-6 py-2 border-2 border-primaryColor hover:bg-primaryColor text-primaryColor hover:text-white font-semibold rounded transition duration-200 "
      onClick={onClick}
    >
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
