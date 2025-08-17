import { NavLink } from "react-router-dom";
import InputField from "../../../components/InputField";
import Button from "../../../components/button";
import InputError from "../../../components/InputError";

function SignUpForm({ formData, onSubmit, onChange, error }) {
  return (
    <form
      className="flex flex-col m-auto gap-3 w-full md:w-1/2"
      onSubmit={onSubmit}
    >
      <legend className="text-primaryColor font-semibold text-xl">
        Sign Up
      </legend>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <InputField
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
          />
          <InputError error={error.firstName} />
        </div>

        <div>
          <InputField
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
          />
          <InputError error={error.lastName} />
        </div>
      </div>

      <InputField
        type="email"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={onChange}
      />
      <InputError error={error.email} />

      <InputField
        type="text"
        placeholder="Enter your username"
        name="username"
        value={formData.username}
        onChange={onChange}
      />
      <InputError error={error.username} />

      <InputField
        type="password"
        placeholder="Enter your password"
        name="password"
        value={formData.password}
        onChange={onChange}
      />
      <InputError error={error.password} />

      <InputField
        type="password"
        placeholder="Confirm your password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChange}
      />
      <InputError error={error.confirmPassword} />

      <Button type="submit">Sign Up</Button>

      <span className="text-sm">
        Already have an account?{" "}
        <NavLink className="underline" to="/login">
          Sign In
        </NavLink>
      </span>
    </form>
  );
}

export default SignUpForm;
