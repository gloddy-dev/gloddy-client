import axios, { AxiosError, AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

import { postReissue } from '../auth';

import type { CustomInstance, ErrorType } from './type';

import { BASE_API_URL } from '@/constants';
import { AUTH_ERROR_CODES } from '@/constants/errorCode';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import sendMessageToReactNative from '@/utils/sendMessageToReactNative';

const privateApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api/v1`,
  withCredentials: true,
});

privateApi.defaults.timeout = 2500;

privateApi.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const { accessToken, refreshToken } = await getTokenFromCookie();
      if (!accessToken || !refreshToken) return config;
      const {
        token: { accessToken: reIssuedAccessToken },
      } = await postReissue(
        { accessToken, refreshToken },
        { headers: { 'X-AUTH-TOKEN': accessToken } }
      );

      config.headers['X-AUTH-TOKEN'] = reIssuedAccessToken;
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

privateApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError<ErrorType, InternalAxiosRequestConfig>) => {
    try {
      if (!error.response) return Promise.reject(error);
      /* 서버 내부 오류 */
      if (error.response.status === AUTH_ERROR_CODES.SERVER_INTERNAL_ERROR) {
        return Promise.reject(error.response.data.reason);
      }
      /* 토큰이 잘못된 경우 */
      if (
        error.response.status === AUTH_ERROR_CODES.UNAUTHORIZED ||
        error.response.status === AUTH_ERROR_CODES.NOT_FOUND
      ) {
        sendMessageToReactNative({ type: 'AUTH', data: 'LOG_OUT' });
        window.location.href = '/join?step=1';
      }
      return Promise.reject(error.response.data.reason);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export default privateApi;
