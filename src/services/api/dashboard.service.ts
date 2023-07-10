import { AxiosInstance } from "axios";
import { api } from "./api.service";
import { User } from "@/@types/user.type";
import { Dashboard } from "@/@types/dashboard.type";
import { CreateDashboardRequest, UpdateDashboardRequest } from "./dashboard.dto";

export default class DashboardService {

  constructor(private readonly api: AxiosInstance) {}

  async listAll(): Promise<Dashboard[]> {
    const response = await this.api.get('/dashboards');

    return response.data;
  }

  async findById(id: string): Promise<Dashboard> {
    const response = await this.api.get(`/dashboards/${id}`);

    return response.data;
  }

  async create({ name, description, userId }: CreateDashboardRequest): Promise<Dashboard> {
    const response = await this.api.post('/dashboards', { name, description, userId });

    return response.data;
  }
  
  async update(id: string, { name, description }: UpdateDashboardRequest): Promise<Dashboard> {
    const response = await this.api.post(`/dashboards/${id}`, { name, description });
  
    return response.data;
  }
  
  async delete(id: string): Promise<void> {
    await this.api.delete(`/dashboards/${id}`);
  }

}

export const dashboardService = new DashboardService(api);