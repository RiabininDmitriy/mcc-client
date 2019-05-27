import React, { FunctionComponent } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import UserStore from "../../../models/stores/UserStore";
import BootstrapProvider from "@bootstrap-styled/provider/lib/BootstrapProvider";

import Container from "@bootstrap-styled/v4/lib/Container";
import {
  Card,
  Form,
  FormGroup,
  InputGroup,
  Button
} from "@bootstrap-styled/v4";
import H4 from "@bootstrap-styled/v4/lib/H4";
import theme from "./theme";
import {
  DividerLine,
  DividerText,
  Wrapper,
  FieldsColumn
} from "./styledComponents";

import { GoogleSignUp, GroupInput, FullNameInput } from "./inputs";

interface IProps extends RouteComponentProps<any> {
  store: typeof UserStore.Type;
}
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
const MainCard: FunctionComponent<any> = props => {
  return (
    <Wrapper>
      <Container>
        <Card style={{ backgroundColor: "#E6E8EC", borderColor: "#E6E8EC" }}>
          {props.children}
        </Card>
      </Container>
    </Wrapper>
  );
};
const ForeignSignUps = () => {
  return (
    <div>
      <DividerText>
        <DividerLine className="bg-light" />
      </DividerText>
      {GoogleSignUp()}
      <DividerText>
        <DividerLine className="bg-light" />
      </DividerText>
    </div>
  );
};
const notEmptyFields = (...fields: string[]) => {
  return fields.find(field => field.length === 0) === undefined;
};

class Register extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      repeatedPassword: "",
      canContinue: false
    };
  }
  checkFields = () => {
    const {
      firstName,
      lastName,
      username,
      email,
      phone,
      password,
      repeatedPassword
    } = this.state;
    return notEmptyFields(
      firstName,
      lastName,
      username,
      email,
      phone,
      password,
      repeatedPassword
    );
  };
  handleInput = (field: string) => (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      canContinue: this.checkFields(),
      [field]: target.value
    }));
  };
  render() {
    return (
      <BootstrapProvider theme={theme}>
        <MainCard>
          <H4 className="card-title mt-3 text-center">Create Account</H4>
          <Form className="card-body mx-auto" onSubmit={() => console.log()}>
            <FieldsColumn>
              <FormGroup>
                {FullNameInput("passport", "blue", this.handleInput.bind(this))}
                {GroupInput(
                  "envelope",
                  "grey",
                  "email",
                  this.handleInput("email").bind(this),
                  this.state.email
                )}
                {GroupInput(
                  "phone",
                  "#0C7489",
                  "phone",
                  this.handleInput("phone").bind(this),
                  this.state.phone
                )}
                {GroupInput(
                  "user",
                  "orange",
                  "username",
                  this.handleInput("username").bind(this),
                  this.state.username
                )}
                {GroupInput(
                  "lock-open",
                  "#073B4C",
                  "Create password",
                  this.handleInput("password").bind(this),
                  this.state.password,
                  "password"
                )}
                {GroupInput(
                  "lock",
                  "#073B4C",
                  "Repeat password",
                  this.handleInput("repeatedPassword").bind(this),
                  this.state.repeatedPassword,
                  "password"
                )}
              </FormGroup>
              {ForeignSignUps()}
              <InputGroup className="form-group">
                <Button disabled={!this.state.canContinue}>Continue</Button>
              </InputGroup>
            </FieldsColumn>
          </Form>
        </MainCard>
      </BootstrapProvider>
    );
  }
}
export default withRouter(Register);
