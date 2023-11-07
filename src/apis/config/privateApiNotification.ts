import { CustomInstance } from './type';
import { BASE_API_URL_NOTIFICATION } from '@/constants';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const privateApiNotification: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL_NOTIFICATION}/api/v1`,
  withCredentials: true,
});

privateApiNotification.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const { userId } = await getTokenFromCookie();
      config.headers['USER_ID'] = userId;
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

export { privateApiNotification };
