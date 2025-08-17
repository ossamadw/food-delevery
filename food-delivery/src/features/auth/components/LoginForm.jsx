import { NavLink } from "react-router-dom";
import Button from "../../../components/button";
import InputError from "../../../components/InputError";
import InputField from "../../../components/InputField";

function LoginForm({ formData, onSubmit, onChange, error }) {
  return (
    <form
      className="flex flex-col m-auto gap-3 w-full md:w-1/2"
      onSubmit={onSubmit}
    >
      <legend className="text-primaryColor font-semibold text-xl">Login</legend>

      {/* Email */}
      <InputField
        type="email"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={onChange}
      />
      <InputError error={error.email} />

      {/* Password */}
      <InputField
        type="password"
        placeholder="Enter your password"
        name="password"
        value={formData.password}
        onChange={onChange}
      />
      <InputError error={error.password} />

      <Button type="submit">Login</Button>

      <span className="text-sm">
        Don’t have an account?{" "}
        <NavLink className="underline" to="/signUp">
          Sign Up
        </NavLink>
      </span>
    </form>
  );
}

export default LoginForm;
