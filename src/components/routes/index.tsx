import React from "react";

import UserStore from "../../models/stores/UserStore";
import UserCard from "../pages/users/UserCard";
import CreateUser from "../pages/users/CreateUser";
import NavBar from "../shared/NavBar";
import UsersList from "../pages/users/UsersList";

import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

interface IProps {
  store: typeof UserStore.Type;
}
export default class Routes extends React.Component<IProps> {
  render() {
    const { store } = this.props;
    return (
      <Router history={history}>
        <NavBar />
        <Route exact path="/" render={() => <h2>Home</h2>} />
        <Route
          exact
          path="/users/"
          render={() => <UsersList store={store} />}
        />
        <Route
          exact
          path="/users/:username/"
          render={() => <UserCard store={store} />}
        />
        <Route exact path="/projects/" render={() => <h2>Projects</h2>} />
        <Route
          exact
          path="/create"
          render={() => <CreateUser store={store} />}
        />
      </Router>
    );
  }
}
