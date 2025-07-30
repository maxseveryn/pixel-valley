import React, { useState } from "react";

import styles from "./PasswordInput.module.css";

export default function PasswordInput({ id, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.field}>
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className={styles.input}
          required
        />
        <button
          className={styles.input__eye}
          onClick={(e) => {
            e.preventDefault();
            setShow((prev) => !prev);
          }}
          aria-label={show ? "Hide password" : "Show password"}
        >
          <i className={`fa-solid ${show ? "fa-eye-slash" : "fa-eye"}`}></i>
        </button>
      </div>
    </div>
  );
}
