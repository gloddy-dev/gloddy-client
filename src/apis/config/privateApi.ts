import { ApiError } from './customError';
import { postReissue } from '../auth';
import { BASE_API_URL } from '@/constants';
import { AUTH_ERROR_CODES } from '@/constants/errorCode';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import axios, { AxiosError, AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

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
      if (
        error.response.status === AUTH_ERROR_CODES.UNAUTHORIZED ||
        error.response.status === AUTH_ERROR_CODES.NOT_FOUND
      ) {
        window.location.href = '/join?step=1';
      }
      if (error.response.status === AUTH_ERROR_CODES.TOKEN_ERROR) {
        try {
          const { refreshToken, accessToken } = await getTokenFromCookie();
          if (!refreshToken || !accessToken) {
            throw new ApiError(
              '에러 발생',
              '토큰이 없습니다.',
              AUTH_ERROR_CODES.UNAUTHORIZED,
              new Date()
            );
          }

          const {
            token: { accessToken: reIssuedAccessToken, refreshToken: reIssuedRefreshToken },
          } = await postReissue(
            { accessToken, refreshToken },
            { headers: { 'X-AUTH-TOKEN': accessToken } }
          );

          if (!reIssuedAccessToken || !reIssuedRefreshToken) {
            throw new ApiError(
              '에러 발생',
              'accessToken 발급 중 오류가 발생했습니다.',
              AUTH_ERROR_CODES.UNAUTHORIZED,
              new Date()
            );
          }

          const prevRequest = error.config;
          if (!prevRequest) {
            throw new ApiError(
              '에러 발생',
              '이전 정보가 없습니다.',
              AUTH_ERROR_CODES.UNAUTHORIZED,
              new Date()
            );
          }

          prevRequest.headers['X-AUTH-TOKEN'] = reIssuedAccessToken;
          return privateApi(prevRequest);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      return Promise.reject(error.response.data.reason);
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export default privateApi;
