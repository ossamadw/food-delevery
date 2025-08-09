import Button from "./button";
import InputField from "./InputField";

const CheckOutForm = ({ formData, onChange , handleSubmit }) => {
  return (
            <fieldset className="w-full space-y-5">

    <legend className="text-2xl font-semibold text-primaryColor">
            Checkout
          </legend>
    <form onSubmit={handleSubmit}  className="flex flex-col gap-5 text-lg">
      <InputField
        type="text"
        name="cardName"
        value={formData.cardName || ""}
        onChange={onChange}
        className="bg-slate-100 border-none hover:ring-2 hover:ring-primaryColor transition-all"
        placeholder="Name on card"
      />
      <InputField
        type="text"
        name="address"
        value={formData.address || ""}
        onChange={onChange}
        className="bg-slate-100 border-none hover:ring-2 hover:ring-primaryColor transition-all"
        placeholder="Your address"
      />
      <div className="grid grid-cols-2 gap-5">
        <InputField
          type="text"
          name="city"
          value={formData.city || ""}
          onChange={onChange}
          className="bg-slate-100 border-none hover:ring-2 hover:ring-primaryColor transition-all"
          placeholder="Your city"
        />
        <InputField
          type="number"
          name="zipCode"
          value={formData.zipCode || ""}
          onChange={onChange}
          className="bg-slate-100 border-none hover:ring-2 hover:ring-primaryColor transition-all"
          placeholder="Zip code"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <InputField
          type="text"
          name="expiryDate"
          value={formData.expiryDate || ""}
          onChange={onChange}
          className="bg-slate-100 border-none hover:ring-2 hover:ring-primaryColor transition-all"
          placeholder="Expiry Date"
        />
        <InputField
          type="number"
          name="ccv"
          value={formData.ccv || ""}
          onChange={onChange}
          className="bg-slate-100 border-none hover:ring-2 hover:ring-primaryColor transition-all"
          placeholder="Cvv"
        />
      </div>
      <InputField
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber || ""}
        onChange={onChange}
        className="bg-slate-100 border-none hover:ring-2 hover:ring-primaryColor transition-all"
        placeholder="Phone Number"
      />
      <Button>Save</Button>
    </form>
    </fieldset>
  );
};

export default CheckOutForm;
