import React from "react";
import { observer } from "mobx-react";
import "reflect-metadata";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";
import UserStore from "../../../models/stores/UserStore";
import Link from "../../shared/Link";
import { IUser } from "../../../models/entities/User";
import NavBar from "../../shared/NavBar";

interface IProps extends RouteComponentProps<any> {
  store: typeof UserStore.Type;
}
const UserLink = (user: IUser) => (
  <li key={user.uid}>
    {Link(`/users/${user.username}`, `${user.firstName} ${user.lastName}`)}
  </li>
);
class UsersList extends React.Component<IProps> {
  componentWillMount() {
    const { store } = this.props;
    if (store) {
      store
        .fetchData()
        .then(() => console.log("Store was updated from UsersList"));
    }
  }

  render() {
    const { store } = this.props;
    const users = store.allUsers;
    return (
      <div>
        <NavBar />
        <ul>
          <h2>Users List</h2>
          {<h2>{Link("/create", "Create user")}</h2>}
          {users.map(user => UserLink(user))}
        </ul>
      </div>
    );
  }
}
export default withRouter<IProps>(observer(UsersList));
