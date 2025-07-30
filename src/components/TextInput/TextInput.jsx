// components/TextInput/TextInput.jsx
import React from "react";
import styles from "./TextInput.module.css";

export default function TextInput({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
}) {
  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}
