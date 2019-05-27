import React from "react";
import UserStore from "../../../models/stores/UserStore";
import { RouteComponentProps, withRouter } from "react-router";
import { observer } from "mobx-react";
import NavBar from "../../shared/NavBar";

interface IProps extends RouteComponentProps<any> {
  store: typeof UserStore.Type;
}
interface IState {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
class CreateUser extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <NavBar />
        <form id="data" />
        <p>
          <input placeholder="username" name="user" form="data" />
        </p>
        <p>
          <input placeholder="First name" name="user" form="data" />
        </p>
        <p>
          <input placeholder="Last name" name="user" form="data" />
        </p>
        <p>
          <input placeholder="email" name="user" form="data" />
        </p>
        <p>
          <input type="submit" value="Create" form="data" />
        </p>
      </div>
    );
  }
}
export default withRouter<IProps>(observer(CreateUser));
