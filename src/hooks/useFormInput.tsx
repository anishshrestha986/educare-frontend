import React from "react";
import InputField from "../components/InputField";
import { useState, useCallback } from "react";
import Menu from "../components/Menu";
/**
 * creates and returns object representation of form field
 *
 * @param {string} placeholder - label to show with the form input
 * @param {string} name - input name
 * @param {string} inputType - input type
 * @param {string | Array<string> } defaultValue - default value for the input
 */
export function createFormFieldConfig(
  placeholder: string,
  name: string,
  inputType: string,
  defaultValue?: string | Array<string>
) {
  return {
    renderInput: (
      handleChange: any,
      value: any,
      isValid: boolean,
      error: string,
      key: React.Key
    ) => {
      if (inputType !== "dropdown") {
        return (
          <InputField
            placeholder={placeholder}
            key={key}
            name={name}
            inputType={inputType}
            isValid={isValid}
            value={value}
            onChange={handleChange}
            errorMessage={error}
          />
        );
      }

      return (
        <Menu
          placeholder={placeholder}
          key={key}
          name={name}
          inputType={inputType}
          value={value}
        />
      );
    },
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
  };
}

function useFormInput(formObj: Object) {
  const [form, setForm] = useState(formObj);

  function renderFormInputs() {
    return Object.values(form).map((inputObj) => {
      const { value, label, errorMessage, valid, renderInput } = inputObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });
  }

  const onInputChange = useCallback(() => {
    // not yet implemented
  }, []);

  return { renderFormInputs };
}

export default useFormInput;
