import React, { ChangeEvent } from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  name: string;
  // value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label,
  type,
  placeholder,
  name,
  // value,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col h-auto gap-4">
      <label htmlFor={label}>{label}</label>
      <input
        className="inputConection"
        type={type}
        placeholder={placeholder}
        // value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
