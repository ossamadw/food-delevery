const InputField = ({
  type = "text",
  onChange,
  value,
  name,
  id,
  placeholder,
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`border-none rounded px-4 py-2 w-full bg-slate-100 focus:outline-none  focus:ring-2 focus:ring-orange-500 ${className}`}
      {...rest}
    />
  );
};

export default InputField;
