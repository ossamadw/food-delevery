import { useState } from "react";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormErrors = () => {
    const err = {};

    if (!formData.firstName.trim()) {
      err.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      err.lastName = "Last name is required";
    }
    if (!formData.username.trim()) {
      err.username = "Username is required";
    }
    if (!formData.email) {
      err.email = "Email field is required";
    } else if (!formData.email.includes("@")) {
      err.email = "Invalid email address.";
    }
    if (!formData.password) {
      err.password = "Password is required";
    } else if (formData.password.length < 6) {
      err.password = "Password must be at least 6 characters long";
    }
    if (!formData.confirmPassword) {
      err.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      err.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(err).length > 0) {
      setError(err);
      return true; 
    } else {
      resetForm();
      return false; 
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setError({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = handleFormErrors();

    if (!hasErrors) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <fieldset className="my-10">
      <SignUpForm
        formData={formData}
        error={error}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </fieldset>
  );
};

export default SignUp;
