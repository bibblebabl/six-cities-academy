import axios, { AxiosError, AxiosInstance } from 'axios';
import { getToken } from './token';

import { ErrorResponse } from '../const';
import { toast } from 'react-toastify';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      if (!config.headers) {
        config.headers = {};
      }

      config.headers['x-token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && error.response.data) {
        const data = error.response.data as ErrorResponse;
        toast.warn(data.error || null);
      }

      throw error;
    }
  );

  return api;
};
