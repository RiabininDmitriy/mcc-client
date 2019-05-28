import { Container } from "typedi";
import axios from "axios";
import { IUser } from "../../models/entities/User";
import config from "../apiConfig.json";

const { prefix, serverPort, users } = config;

export default class UsersService {
  public async getAll(): Promise<IUser[] | undefined> {
    try {
      const res = await axios.get(`${prefix}${serverPort}${users}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
  public async postUser(user: IUser): Promise<any | undefined> {
    try {
      const res = await axios.post(`${prefix}${serverPort}${users}`, user);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}
Container.get(UsersService);
