export interface IControl {
  key: string;
  value: string;
  placeholder: string;
  valid: boolean;
  touched: boolean;
  type: string;
  rule: IRule;
  warningText: string;
  icon?: {
    faIcon: string;
    color: string;
  };
}
export interface IRule {
  minLength?: number;
  maxLength?: number;
  isRequired?: boolean;
  isEmail?: boolean;
  isPhone?: boolean;
  shouldEqual?: string;
}
export interface IFormState {
  formControls: {
    firstName: IControl;
    lastName: IControl;
    username: IControl;
    email: IControl;
    phone: IControl;
    password: IControl;
    repeatedPassword: IControl;
  };
  alert: {
    isError: boolean;
    error?: Error;
  };
  canContinue: boolean;
}
