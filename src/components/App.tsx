import React from 'react';
import { Provider, observer, inject } from "mobx-react";
import UserStore from '../models/stores/UserStore';
import "reflect-metadata";
import { computed, observable } from 'mobx';
import UsersList from './UsersList';

interface AppProps {
  store?: typeof UserStore.Type;
}

class App extends React.Component<AppProps> {
  componentWillMount() {
    const { store } = this.props;
    if (store) {
      store.fetchData().then(
        () => console.log('Updated'));
  }
}
  
  render() {
    return (
      <div className="App">
        {this.props.store && <UsersList users={this.props.store.allUsers}></UsersList>}
      </div>
    );
  }
}
export default inject('store')(observer (App));

