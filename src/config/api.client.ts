import { type AxiosRequestConfig } from 'axios';

import { instance } from './api.interceptors';

class ApiClient {
  private client = instance;

  async get<T>(
    url: string,
    params?: Record<string, never>,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.client.get<T>(url, { params, ...config });
    return response.data;
  }

  async post<T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

export const apiClient = new ApiClient();
