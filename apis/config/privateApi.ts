import { ApiError } from './customError';
import { postReissue } from '../auth';
import { BASE_API_URL } from '@/constants';
import { AUTH_ERROR_CODES } from '@/constants/errorCode';
import { getTokenFromCookie, setTokenAtCookie } from '@/utils/auth/tokenController';
import axios, { AxiosError, AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';

import type { CustomInstance, ErrorType } from './type';

const privateApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api/v1`,
  withCredentials: true,
});

privateApi.defaults.timeout = 2500;

privateApi.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const { accessToken } = await getTokenFromCookie();
      if (!accessToken) throw new Error('로그인이 필요합니다.');
      config.headers['X-AUTH-TOKEN'] = accessToken;
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
      if (error.response.status === AUTH_ERROR_CODES.EXPIRED_TOKEN_ERROR) {
        try {
          const { refreshToken, accessToken } = await getTokenFromCookie();
          if (!refreshToken || !accessToken)
            throw new ApiError(
              '에러 발생',
              '토큰이 없습니다.',
              AUTH_ERROR_CODES.EXPIRED_TOKEN_ERROR,
              new Date()
            );
        } catch (e) {
          // redirect('/join');
          return Promise.reject(e);
        }
      }
      return Promise.reject(new Error('요청 도중 에러 발생'));
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export default privateApi;
