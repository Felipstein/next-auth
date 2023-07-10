import { AxiosInstance } from "axios";
import { api } from "./api.service";
import { User } from "@/@types/user.type";

export default class UserService {

  constructor(private readonly api: AxiosInstance) {}

  async listAll(): Promise<User[]> {
    const response = await this.api.get('/users');

    return response.data;
  }

  async findById(id: string): Promise<User> {
    const response = await this.api.get(`/users/${id}`);

    return response.data;
  }

}

export const userService = new UserService(api);