import React from "react";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "@bootstrap-styled/v4";

const FullNameInput = (
  faIcon: string,
  iconColor: string,
  handleInput: Function
) => (
  <InputGroup className="form-group">
    <InputGroupAddon style={{ color: iconColor, width: "30px" }}>
      <i className={`fas fa-${faIcon}`} />
    </InputGroupAddon>
    <Input
      placeholder="First name"
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        handleInput("firstName")(e)
      }
    />
    <Input
      placeholder="Last name"
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        handleInput("lastName")(e)
      }
    />
  </InputGroup>
);
const GroupInput = (
  faIcon: string,
  iconColor: string,
  placeholder: string,
  handleInput: Function,
  value: string,
  type?: string
) => (
  <InputGroup className="form-group">
    <InputGroupAddon style={{ color: iconColor, width: "30px" }}>
      <i className={`fas fa-${faIcon}`} />
    </InputGroupAddon>
    <Input
      placeholder={placeholder}
      type={type || "text"}
      onChange={(e: React.FormEvent<HTMLInputElement>) => handleInput(e)}
      value={value}
    />
  </InputGroup>
);

const GoogleSignUp = () => {
  return (
    <InputGroup className="form-group">
      <InputGroupAddon
        style={{ width: "40px", backgroundColor: "#b23b2c", color: "white" }}
      >
        <i className="fab fa-google" />
      </InputGroupAddon>
      <Button
        className="rounded-right"
        style={{
          width: "100%",
          backgroundColor: "#DD4B39",
          border: "none",
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0"
        }}
      >
        Sign up with Google
      </Button>
    </InputGroup>
  );
};
interface IState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  repeatedPassword: string;
  canContinue: boolean;
}
// const InputGroups = (state: IState, handleInput: Function) => {
//   return (
//     <div>
//       {FullNameInput("passport", "blue", this.handleInput.bind(this))}
//       {GroupInput(
//         "envelope",
//         "grey",
//         "email",
//         handleInput("email").bind(this),
//         this.state.email
//       )}
//       {GroupInput(
//         "phone",
//         "#0C7489",
//         "phone",
//         this.handleInput("phone").bind(this),
//         this.state.phone
//       )}
//       {GroupInput(
//         "user",
//         "orange",
//         "username",
//         this.handleInput("username").bind(this),
//         this.state.username
//       )}
//       {GroupInput(
//         "lock-open",
//         "#073B4C",
//         "Create password",
//         this.handleInput("password").bind(this),
//         this.state.password,
//         "password"
//       )}
//       {GroupInput(
//         "lock",
//         "#073B4C",
//         "Repeat password",
//         this.handleInput("repeatedPassword").bind(this),
//         this.state.repeatedPassword,
//         "password"
//       )}
//     </div>
//   );
// };

export { FullNameInput, GroupInput, GoogleSignUp };
