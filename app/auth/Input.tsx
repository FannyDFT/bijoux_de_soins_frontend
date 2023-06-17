import React from "react";

function Input({ label, type, placeholder, name, value, onChange }) {
  return (
    <div className="flex flex-col h-auto gap-4">
      <label htmlFor={label}>
        {label}
      </label>
        <input
          className="inputConection"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
    </div>
  );
}

export default Input;
