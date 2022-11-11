function createValidationRule(
  ruleName: string,
  errorMessage: string,
  validateFunc: Function
) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
}
export function requiredRule(inputFieldName: string) {
  return createValidationRule(
    "required",
    `${inputFieldName} required`,
    (inputValue: string) => inputValue.length !== 0
  );
}

export function minLengthRule(inputFieldName: string, minCharacters: number) {
  return createValidationRule(
    "minLength",
    `${inputFieldName} should contain atleast ${minCharacters} characters`,
    (inputValue: string) => inputValue.length >= minCharacters
  );
}

export function maxLengthRule(inputFieldName: string, maxCharacters: number) {
  return createValidationRule(
    "minLength",
    `${inputFieldName} cannot contain more than ${maxCharacters} characters`,
    (inputValue: string) => inputValue.length <= maxCharacters
  );
}

export function passwordMatchRule() {
  return createValidationRule(
    "passwordMatch",
    `passwords do not match`,
    (inputValue: string, formObj: { password: { value: string } }) =>
      inputValue === formObj.password.value
  );
}
