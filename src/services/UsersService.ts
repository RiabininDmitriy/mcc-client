
import { Service, Container } from "typedi";
import axios from 'axios';
import User, { IUser } from "../models/entities/User";
import { serverPort } from '../config.json';
@Service('UsersService')
export default class UsersService {
    public async getAll(): Promise<IUser[] | undefined>{
        try {
            const res = await axios.get(`http://localhost:${serverPort}/api/users`);
            return res.data;
        }
        catch (err) {
            new Error(err.message);
            return undefined;
        }
    }
};
Container.get(UsersService);