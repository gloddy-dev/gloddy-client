import { login } from '../auth';
import { InternalAxiosRequestConfig } from 'axios';

export const onRequestClient = async (config: InternalAxiosRequestConfig) => {
  try {
    const data = await login();
    const token = data.token;

    if (token) {
      config.headers['X-AUTH-TOKEN'] = token;
      return config;
    }
    throw new Error('로그인이 필요합니다.');
  } catch (error) {
    return Promise.reject(error);
  }
};
