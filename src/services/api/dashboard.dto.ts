export interface CreateDashboardRequest {
  name: string,
  description?: string,
  userId: string,
}

export interface UpdateDashboardRequest {
  name?: string,
  description?: string | null,
}