import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import UserStore from "../../../models/stores/UserStore";
import { observer } from "mobx-react";
import { IUser } from "../../../models/entities/User";

interface IProps extends RouteComponentProps<any> {
  store: typeof UserStore.Type;
}
const UserInfo = (user: IUser) => {
  return (
    <div>
      <h3>{`${user.firstName + user.lastName}`}</h3>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
    </div>
  );
};
class UserCard extends React.Component<IProps> {
  componentWillMount() {
    const { store } = this.props;
    if (store) {
      store
        .fetchData()
        .then(() => console.log("Store was updated from UserCard"));
    }
  }
  render() {
    const { match, store } = this.props;
    const user = store.getUser(match.params.username);
    return <div>{user && UserInfo(user)}</div>;
  }
}
export default withRouter<IProps>(observer(UserCard));
