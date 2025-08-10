import axios from 'axios';

import { errorCatch } from './api.helpers';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const getAccessToken = () => localStorage.getItem('accessToken');

instance.interceptors.request.use(
  config => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/auth/refresh-token'
    ) {
      originalRequest._retry = true;

      if (!error.response) {
        console.error('Network error or server not reachable:', error);
        return Promise.reject(error);
      }

      try {
        const { data } = await instance.get<{ accessToken: string }>('/auth/refresh-token', {
          withCredentials: true,
        });

        localStorage.setItem('accessToken', data.accessToken);

        originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;

        return instance(originalRequest);
      } catch (refreshError) {
        errorCatch(refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
