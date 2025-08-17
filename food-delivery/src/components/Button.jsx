
const Button = ({ children, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      className={`px-6 py-2 rounded font-semibold bg-orange-500 text-white hover:bg-orange-600 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
