import { ApiError } from './customError';
import { BASE_API_URL, isServer } from '@/constants';
import { AUTH_ERROR_CODES } from '@/constants/errorCode';
import { AUTH_KEYS } from '@/constants/token';
import { getAuthTokensByCookie } from '@/utils/auth';
import { getToken } from '@/utils/auth/getToken';
import { getAccessTokenServer } from '@/utils/auth/tokenValidator';
import { getCookie } from '@/utils/cookie';
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
      const { accessToken } = await getToken();
      if (accessToken) {
        config.headers['X-AUTH-TOKEN'] = accessToken;
        return config;
      }
      throw new Error('로그인이 필요합니다.');
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
      if (error.response) {
        if (error.response.status === AUTH_ERROR_CODES.EXPIRED_TOKEN_ERROR) {
          try {
            let refreshToken, accessToken, userId;
            if (isServer) {
              const { cookies } = await import('next/headers');
              const cookieStore = cookies();
              refreshToken = cookieStore.get(AUTH_KEYS.refreshToken)?.value;
              accessToken = cookieStore.get(AUTH_KEYS.accessToken)?.value;
              userId = cookieStore.get(AUTH_KEYS.userId)?.value as unknown as number;
            } else {
              const auth = getAuthTokensByCookie(document.cookie);
              accessToken = auth.accessToken;
              refreshToken = auth.refreshToken;
              userId = auth.userId;
            }

            if (!refreshToken || !accessToken || userId === undefined)
              throw new ApiError(
                '에러 발생',
                '토큰이 없습니다.',
                AUTH_ERROR_CODES.EXPIRED_TOKEN_ERROR,
                new Date()
              );

            const validTokenResponse = await getAccessTokenServer({
              refreshToken,
              accessToken,
              userId,
            });

            if (!validTokenResponse) {
              throw new ApiError(
                '에러 발생',
                'accessToken 발급중 오류가 발생했습니다.',
                AUTH_ERROR_CODES.EXPIRED_TOKEN_ERROR,
                new Date()
              );
            } else {
              const prevRequest = error.config;
              if (!prevRequest) {
                throw new ApiError(
                  '에러 발생',
                  '이전 정보가 없습니다.',
                  AUTH_ERROR_CODES.EXPIRED_TOKEN_ERROR,
                  new Date()
                );
              }
              prevRequest.headers['X-AUTH-TOKEN'] = validTokenResponse;
              return privateApi(prevRequest);
            }
          } catch (e) {
            redirect('/join');
            return Promise.reject(e);
          }
        }
        console.log(error);
      } else {
        console.log('Error', error.message);
      }

      return Promise.reject(new Error('요청 도중 에러 발생'));
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export default privateApi;
