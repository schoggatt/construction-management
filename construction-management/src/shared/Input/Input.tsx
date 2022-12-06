import { useEffect, useState } from "react";

export interface InputProps {
  id: string;
  label: string;
  type?: "text" | "number" | "password" | "email" | "password" | "date";
  value: string;
  defaultValue?: string;
  onChange: (e: any) => void;
}

export const Input = (props: InputProps) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
