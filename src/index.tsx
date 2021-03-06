import React from "react";
import ReactDOM from "react-dom";
import UserStore from "./models/stores/UserStore";
import App from "./components";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import "./index.css";

const store = UserStore.create();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
