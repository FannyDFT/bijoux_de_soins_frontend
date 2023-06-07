import React from "react";

function Input({ label, type, placeholder, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={label}>
        {label}
        <input
          className="inputConnection"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Input;
