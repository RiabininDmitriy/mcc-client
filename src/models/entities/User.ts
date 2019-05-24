import { types, Instance } from "mobx-state-tree";

const User = types.model("User", {
  uid: types.string,
  firstName: types.string,
  lastName: types.string,
  username: types.identifier,
  email: types.string
});

export type IUser = Instance<typeof User>;

export default User;
