import React from "react";

import { observer, inject } from "mobx-react";

import UserStore from "../models/stores/UserStore";
import Routes from "./routes";

interface AppProps {
  store?: typeof UserStore.Type;
}

class App extends React.Component<AppProps> {
  render() {
    const { store } = this.props;
    return <div className="App">{store && <Routes store={store} />}</div>;
  }
}
export default inject("store")(observer(App));
