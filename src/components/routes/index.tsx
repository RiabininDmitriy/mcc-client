import React from "react";

import UserStore from "../../models/stores/UserStore";
import UserCard from "../pages/users/UserCard";
import CreateUser from "../pages/users/CreateUser";
import NavBar from "../shared/NavBar";
import UsersList from "../pages/users/UsersList";

import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import Register from "../pages/register";

const history = createBrowserHistory();

interface IProps {
  store: typeof UserStore.Type;
}
export default class Routes extends React.Component<IProps> {
  render() {
    const { store } = this.props;
    return (
      <Router history={history}>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <NavBar />
              <h2>Home</h2>
            </div>
          )}
        />
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
        <Route
          exact
          path="/projects/"
          render={() => (
            <div>
              <NavBar />
              <h2>Projects</h2>
            </div>
          )}
        />
        <Route
          exact
          path="/create"
          render={() => <CreateUser store={store} />}
        />
        <Route
          exact
          path="/register"
          render={() => <Register store={store} />}
        />
      </Router>
    );
  }
}
