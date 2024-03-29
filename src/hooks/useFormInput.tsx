import React from "react";
import InputField from "../components/InputField";
import { useState, useCallback } from "react";
import Menu from "../components/Menu";
import { TypeOf } from "zod";

type createFormFieldConfigReturn = {
  renderInput: Function;
  value: any;
  valid: boolean;
  errorMessage: string;
  touched: boolean;
  name: string;
};
type formFieldValue = {
  renderInput: Function;
  value: any;
  valid: boolean;
  errorMessage: string;
  touched: boolean;
  name: string;
  validationRules?: {
    name: string;
    message: string;
    validate: Function;
  }[];
};

type formObj = {
  [key: createFormFieldConfigReturn["name"]]: formFieldValue;
};
type useFormInputReturn = {
  renderFormInputs: () => any[];
  isFormValid: () => boolean;
};
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
): createFormFieldConfigReturn {
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
    name: name,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
  };
}

function useFormInput(formObj: formObj): useFormInputReturn {
  const [form, setForm] = useState(formObj);

  function renderFormInputs() {
    return Object.values(form).map((inputObj) => {
      const { value, errorMessage, valid, renderInput } = inputObj;
      return renderInput(onInputChange, value, valid, errorMessage);
    });
  }
  const isInputFieldValid = useCallback(
    (inputField: formFieldValue) => {
      if (inputField.validationRules)
        for (const rule of inputField.validationRules) {
          if (!rule.validate(inputField.value, form)) {
            inputField.errorMessage = rule.message;
            return false;
          }
        }
      return true;
    },
    [form]
  );

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      // copy input object whose value was changed
      const inputObj: formFieldValue = { ...form[name] };
      // update value
      inputObj.value = value;

      // update input field's validity
      if (inputObj.validationRules) {
        const isValidInput = isInputFieldValid(inputObj);
        // if input is valid and it was previously invalid
        // set its valid status to true
        if (isValidInput && !inputObj.valid) {
          inputObj.valid = true;
        } else if (!isValidInput && inputObj.valid) {
          // if input is not valid and it was previously valid
          // set its valid status to false
          inputObj.valid = false;
        }
      } else inputObj.valid = true;
      // mark input field as touched
      inputObj.touched = true;
      setForm({ ...form, [name]: inputObj });
    },
    [form, isInputFieldValid]
  );

  const isFormValid = useCallback(() => {
    let isValid = true;
    const arr = Object.values(form);

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }, [form]);

  return { renderFormInputs, isFormValid };
}

export default useFormInput;
