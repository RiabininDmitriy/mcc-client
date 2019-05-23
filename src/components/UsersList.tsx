import React from 'react';
import { Provider, observer, inject } from "mobx-react";
import UserStore from '../models/stores/UserStore';
import "reflect-metadata";
import { computed, observable } from 'mobx';
import User, { IUser } from '../models/entities/User';

interface AppProps {
    users?: IUser[];
}

export default observer(class UsersList extends React.Component<AppProps> {

    render() {
        console.log(this.props.users)
        return (
            <ul>
                {this.props.users &&
                    this.props.users.map(
                        user => <li>{user.firstName + ' ' + user.lastName}</li>
                    )}
            </ul>
        );
    }
}
)

