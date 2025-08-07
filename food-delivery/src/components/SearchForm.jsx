import InputField from "./InputField";
import Button from "./button";

const SearchForm = ({ onSubmit, value, onChange }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full m-auto md:w-1/2 p-1 flex flex-col md:flex-row gap-3"
    >
      <InputField
        placeholder="Search..." 
        value={value}
        onChange={onChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
