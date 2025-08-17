import { useState } from "react";
import LoginForm from "./components/LoginForm";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleFormErrors = () => {
    const err = {};

    if (!formData.email.trim()) {
      err.email = "Email field is required";
    } else if (!formData.email.includes("@")) {
      err.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      err.password = "Password field is required";
    }

    if (Object.keys(err).length > 0) {
      setError(err);
      return true; 
    }

    setError({});
    return false; 
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
    });
    setError({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = handleFormErrors();

    if (!hasErrors) {
      // Submit login request here
      console.log("Login submitted:", formData);

      resetForm();
    }
  };

  return (
    <fieldset className="my-10">
      <LoginForm
        formData={formData}
        onChange={handleChange}
        error={error}
        onSubmit={handleSubmit}
      />
    </fieldset>
  );
}

export default Login;
