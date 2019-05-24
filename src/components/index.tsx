import React from "react";
import { Router, Route } from "react-router";
import { observer, inject } from "mobx-react";
import { createBrowserHistory } from "history";
import NavBar from "./shared/NavBar";
import UsersList from "./pages/users/UsersList";

import UserStore from "../models/stores/UserStore";
import UserCard from "./pages/users/UserCard";
import CreateUser from "./pages/users/CreateUser";

const history = createBrowserHistory();

interface AppProps {
  store?: typeof UserStore.Type;
}

class App extends React.Component<AppProps> {
  render() {
    const { store } = this.props;
    return (
      <div className="App">
        {store && (
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
        )}
      </div>
    );
  }
}
export default inject("store")(observer(App));
