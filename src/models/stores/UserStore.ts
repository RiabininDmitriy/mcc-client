import { types, Instance } from "mobx-state-tree";
import { Container } from "typedi";
import User, { IUser } from "../entities/User";
import UsersService from "../../api/services/UsersService";
import uuid from "uuid/v1";
const UserStore = types
  .model("UserStore", {
    users: types.array(User)
  })
  .views(self => ({
    get allUsers() {
      return Array.from(self.users.values());
    },
    getUser(username: string) {
      return self.users.find(user => user.username === username);
    }
  }))
  .actions(self => ({
    setUsers(users: any) {
      self.users = users;
    }
  }))
  .actions(self => ({
    fetchData: async () => {
      const userService = Container.get(UsersService);
      const users = await userService.getAll();
      if (users)
        self.setUsers(users.map((user: IUser) => ({ ...user, uid: uuid() })));
    },
    postUser: async (user: any, done: Function) => {
      console.log("User recieved for post");
      console.log(user);
      const userService = Container.get(UsersService);
      userService
        .postUser(user)
        .then(value => done(null, value), err => done(err))
        .catch(err => done(err));
    }
  }));

export type IUserStore = Instance<typeof UserStore>;
export default UserStore;
