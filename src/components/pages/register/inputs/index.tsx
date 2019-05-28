import React from "react";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "@bootstrap-styled/v4";

import { IControl } from "../types";

import classNames from "classnames";

const inputClassName = (control: IControl) =>
  classNames("overrides", {
    success: control.touched && control.valid,
    warning: control.touched && !control.valid
  });

const FullNameInput = (
  firstNameControl: IControl,
  lastNameControl: IControl,
  handleInput: Function
) => (
  <InputGroup className="form-group">
    <InputGroupAddon
      className="input-icon"
      style={{
        color: firstNameControl.icon ? firstNameControl.icon.color : null
      }}
    >
      <i
        className={`fas fa-${
          firstNameControl.icon ? firstNameControl.icon.faIcon : null
        }`}
      />
    </InputGroupAddon>
    <Input
      className={inputClassName(firstNameControl)}
      placeholder={firstNameControl.placeholder}
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        handleInput(firstNameControl.key)(e)
      }
    />
    <Input
      className={inputClassName(lastNameControl)}
      placeholder={lastNameControl.placeholder}
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        handleInput(lastNameControl.key)(e)
      }
    />
  </InputGroup>
);

const Warning = (text: string) => {
  return (
    <div className="warning-message overrides">
      <small className="text-danger">{text}</small>
    </div>
  );
};
const GroupInput = (control: IControl, handleInput: Function) => (
  <InputGroup className="form-group">
    <InputGroupAddon
      className="input-icon"
      style={{ color: control.icon ? control.icon.color : null }}
    >
      <i className={`fas fa-${control.icon ? control.icon.faIcon : null}`} />
    </InputGroupAddon>
    <Input
      className={inputClassName(control)}
      placeholder={control.placeholder}
      type={control.type}
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        handleInput(control.key)(e)
      }
    />
    {control.touched && !control.valid && Warning(control.warningText)}
  </InputGroup>
);
const ForeignSignUp = (
  name: string,
  faIcon: string,
  color: string,
  accentColor: string
) => {
  return (
    <InputGroup className="form-group">
      <InputGroupAddon
        style={{ width: "40px", backgroundColor: accentColor, color: "white" }}
      >
        <i className={`fab fa-${faIcon}`} />
      </InputGroupAddon>
      <Button
        className="rounded-right foreign-button override "
        style={{
          backgroundColor: color
        }}
      >
        {`Sign up via ${name}`}
      </Button>
    </InputGroup>
  );
};
export { FullNameInput, GroupInput, ForeignSignUp };
