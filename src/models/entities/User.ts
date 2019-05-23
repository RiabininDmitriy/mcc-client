import { types, Instance } from "mobx-state-tree"

const User = types.model({
    id: types.string,
    firstName: types.string,
    lastName: types.string,
    email: types.string,
})

export type IUser = Instance<typeof User>;

export default User;

