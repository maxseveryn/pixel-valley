import React from "react";
import TextInput from "../../components/TextInput/TextInput.jsx";
import PasswordInput from "../../components/PasswordInput/PasswordInput.jsx";

export default function Register() {
  return (
    <div className="auth-container">
      <title>PixelValley - Register</title>
      <div className="auth">
        <h1>PixelValley | Register</h1>
        <div className="auth__inputs">
          <form>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="Email..."
              autoComplete="username"
              required
            />
            <TextInput
              id="username"
              name="usernmae"
              type="text"
              placeholder="Username..."
              autoComplete="username"
              required
            />

            <PasswordInput
              id="password"
              name="password"
              placeholder="New password..."
            />

            <PasswordInput
              id="password"
              name="password"
              placeholder="Repeat password..."
            />

            <button className="login__submit" type="submit">
              Register
            </button>

            <div className="login__links">
              <a href="/login" className="login__link">
                Already have an account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
