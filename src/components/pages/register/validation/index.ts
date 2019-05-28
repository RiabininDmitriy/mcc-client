import { IRule } from "../types";

const minLengthValidator = (value: string, minLength: number) => {
  return value.length >= minLength;
};
const maxLengthValidator = (value: string, maxLength: number) => {
  return value.length <= maxLength;
};
const emailValidator = (value: string) => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value.toLowerCase());
};
const phoneValidator = (value: string) => {
  let re = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
  return re.test(String(value));
};
const equalityValidator = (value: string, compareTo: string) => {
  return value === compareTo;
};
const validate = (value: string, rule: IRule) => {
  let isValid = true;
  for (let r in rule) {
    switch (r) {
      case "minLength":
        isValid = isValid && minLengthValidator(value, rule[r] || 0);
        break;
      case "maxLength":
        isValid = isValid && maxLengthValidator(value, rule[r] || 0);
        break;
      case "isEmail":
        isValid = isValid && emailValidator(value);
        break;
      case "isPhone":
        isValid = isValid && phoneValidator(value);
        break;
      case "shouldEqual":
        isValid = isValid && equalityValidator(value, rule[r] || "");
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};
export default validate;
