import React, { FunctionComponent } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import UserStore from "../../../models/stores/UserStore";
import BootstrapProvider from "@bootstrap-styled/provider/lib/BootstrapProvider";
import { Container, H4, H5 } from "@bootstrap-styled/v4/lib/";
import {
  Card,
  Form,
  FormGroup,
  InputGroup,
  Button
} from "@bootstrap-styled/v4";

import theme from "./theme";
import {
  DividerLine,
  DividerText,
  Wrapper,
  FieldsColumn
} from "./styledComponents";

import { GroupInput, FullNameInput, ForeignSignUp } from "./inputs";
import { IFormState } from "./types";
import validate from "./validation";
import InitialControls from "./controls";
import { observer } from "mobx-react";

import "./assets/index.css";

interface IProps extends RouteComponentProps<any> {
  store: typeof UserStore.Type;
}

const MainCard: FunctionComponent<any> = props => {
  return (
    <Wrapper>
      <Container>
        <Card className="main-card override">{props.children}</Card>
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
      {ForeignSignUp("Google", "google", "#DD4B39", "#b23b2c")}
      {ForeignSignUp("Facebook", "facebook-square", "#3b5998", "#293e6a")}
      <DividerText>
        <DividerLine className="bg-light" />
      </DividerText>
    </div>
  );
};

class Register extends React.Component<IProps, IFormState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      formControls: InitialControls,
      alert: {
        isError: false
      },
      canContinue: false
    };
  }

  handleInput = (field: string) => (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const updatedControls = {
      ...this.state.formControls
    };
    const updatedField = {
      ...updatedControls[field]
    };
    updatedField.value = target.value;
    updatedField.touched = true;
    updatedField.valid = validate(target.value, updatedField.rule);

    updatedControls[field] = updatedField;

    updatedControls.repeatedPassword.rule.shouldEqual =
      updatedControls.password.value;

    this.setState({
      formControls: updatedControls,
      canContinue: Object.keys(updatedControls).reduce(
        (prev, field) => prev && updatedControls[field].valid,
        true
      )
    });
  };
  handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      username,
      email,
      phone,
      password
    } = this.state.formControls;

    if (this.state.canContinue) {
      this.props.store.postUser(
        {
          firstName: firstName.value,
          lastName: lastName.value,
          username: username.value,
          email: email.value,
          phone: phone.value,
          password: password.value
        },
        ((err: Error, res: any) => {
          if (err) {
            this.setState({
              alert: {
                error: err,
                isError: true
              }
            });
          }
        }).bind(this)
      );
    }
  };
  render() {
    console.log(this.state.formControls);
    const {
      firstName,
      lastName,
      username,
      email,
      phone,
      password,
      repeatedPassword
    } = this.state.formControls;
    return (
      <BootstrapProvider theme={theme}>
        <MainCard>
          <H4 className="card-title mt-3 text-center">Create Account</H4>
          <Form className="card-body mx-auto" onSubmit={this.handleSubmit}>
            <FieldsColumn>
              <FormGroup>
                {FullNameInput(
                  firstName,
                  lastName,
                  this.handleInput.bind(this)
                )}
                {GroupInput(email, this.handleInput.bind(this))}
                {GroupInput(phone, this.handleInput.bind(this))}
                {GroupInput(username, this.handleInput.bind(this))}
                {GroupInput(password, this.handleInput.bind(this))}
                {GroupInput(repeatedPassword, this.handleInput.bind(this))}
              </FormGroup>
              <InputGroup className="form-group submit">
                <Button disabled={!this.state.canContinue}>Continue</Button>
              </InputGroup>
              {/* <Alert color={"danger"} style={{ alignSelf: "center" }}>
                {this.state.alert.error}
              </Alert> */}
              <H5 className="card-title mt-3 text-center">OR</H5>
              {ForeignSignUps()}
            </FieldsColumn>
          </Form>
        </MainCard>
      </BootstrapProvider>
    );
  }
}
export default withRouter(observer(Register));
