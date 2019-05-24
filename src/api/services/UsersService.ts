import { Container } from "typedi";
import axios from "axios";
import { IUser } from "../../models/entities/User";
import config from "../apiConfig.json";

export default class UsersService {
  public async getAll(): Promise<IUser[] | undefined> {
    try {
      const { prefix, serverPort, users } = config;
      const res = await axios.get(`${prefix}${serverPort}${users}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
}
Container.get(UsersService);
