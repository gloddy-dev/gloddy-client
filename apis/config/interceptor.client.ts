import { InternalAxiosRequestConfig } from 'axios';

export const onRequestClient = async (config: InternalAxiosRequestConfig) => {
  return config;
};
