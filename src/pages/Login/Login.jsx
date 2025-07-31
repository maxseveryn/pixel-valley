import React, { useState } from "react";
import "./Login.css";
import TextInput from "../../components/TextInput/TextInput.jsx";
import PasswordInput from "../../components/PasswordInput/PasswordInput.jsx";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <div className="auth-container">
      <title>PixelValley - Login</title>
      <div className="auth">
        <h1>PixelValley | Login</h1>
        <div className="auth__inputs">
          <form onSubmit={handleSubmit}>
            <TextInput
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Email..."
              autoComplete="username"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <PasswordInput
              id="password"
              name="password"
              placeholder="Password..."
              label="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button className="login__submit" type="submit">
              Log In
            </button>

            <div className="login__links">
              <a href="password-recover" className="login__link">
                Can't remember your password?
              </a>
              <a href="/register" className="login__link">
                Don't have an account? Register now!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
