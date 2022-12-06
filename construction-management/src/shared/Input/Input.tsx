import { useEffect, useState } from "react";

export interface InputProps {
  id: string;
  label: string;
  type?: "text" | "number" | "password" | "email" | "password" | "date";
  value: string;
  defaultValue?: string;
  onChange: (e: any) => void;
  error?: string;
}

export const Input = ({
  id,
  label,
  type = "text",
  value,
  defaultValue = "",
  error,
  onChange,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e)}
      />
      <div>{error}</div>
    </div>
  );
};

export default Input;
