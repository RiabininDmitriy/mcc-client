
import { types, Instance, cast, flow } from "mobx-state-tree";
import { SHOW_ALL } from "../../constants/UsersFilters";
import {Container} from 'typedi';
import User from "../entities/User";
import UsersService from "../../services/UsersService";

const filterType = types.union(...[SHOW_ALL].map(types.literal))
const USER_FILTERS = {
    [SHOW_ALL]: () => true,
}

const UserStore = types
    .model({
        users: types.array(User),
        filter: types.optional(filterType, SHOW_ALL)
    })
    .views(self => ({
        get allUsers() {
            return Array.from(self.users.values())
        }
    }))
    .actions(self => ({
       fetchData: flow(
           function* fetchUsers() {
            const userService = Container.get(UsersService);
            self.users = yield userService.getAll();
           }
       )
    }))
export type IUserStore= Instance<typeof UserStore>;
export default UserStore;