import "../styles/inputField.css";
import React from "react";

interface InputFieldProps {
  placeholder: string;
  marginLeft?: string;
  inputType?: string;
  marginTop?: string;
  width?: string;
  display?: string;
  name?: string;
  step?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  isRequired?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  isValid?: boolean;
}

export default function InputField({
  placeholder,
  marginLeft,
  inputType,
  marginTop,
  width,
  display,
  onChange,
  name,
  isRequired,
  value,
  step,
  isValid,
  errorMessage,
}: InputFieldProps) {
  return (
    <div className="inputContainer">
      <input
        style={{
          marginLeft,
          marginTop,
          width,
          display,
        }}
        className="inputField"
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        value={value}
        name={name}
        required={isRequired}
        step={step}
      />
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </div>
  );
}
