import { ApiError } from './customError';
import privateApi from './privateApi.client';
import { AUTH_ERROR_CODES } from '@/constants/errorCode';
import { getAuthTokensByCookie } from '@/utils/auth';
import { getAccessTokenClient } from '@/utils/auth/tokenValidator.client';
import { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';

import type { ErrorType } from './type';

export const onRequestClient = async (config: InternalAxiosRequestConfig) => {
  try {
    const auth = getAuthTokensByCookie(document.cookie);

    if (auth.accessToken) {
      config.headers['X-AUTH-TOKEN'] = auth.accessToken;
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const onResponseErrorClient = async (
  error: AxiosError<ErrorType, InternalAxiosRequestConfig>
) => {
  try {
    if (error.response) {
      if (error.response.status === AUTH_ERROR_CODES.EXPIRED_TOKEN_ERROR) {
        try {
          const auth = getAuthTokensByCookie(document.cookie);
          const validTokenResponse = await getAccessTokenClient(auth);
          if (!validTokenResponse) {
            throw new ApiError(
              '에러 발생',
              'accessToken 발급중 오류가 발생했습니다.',
              AUTH_ERROR_CODES.EXPIRED_TOKEN_ERROR,
              new Date()
            );
          }
          if (validTokenResponse instanceof ApiError) {
            throw validTokenResponse;
          } else {
            const prevRequest = error.config;
            if (!prevRequest)
              throw new ApiError(
                '에러 발생',
                '이전 정보가 없습니다.',
                AUTH_ERROR_CODES.UNAUTHORIZED_ERROR,
                new Date()
              );

            prevRequest.headers['X-AUTH-TOKEN'] = { validTokenResponse };
            return privateApi(prevRequest);
          }
        } catch (e) {
          console.log(e);
          redirect('/join');
          return Promise.reject(e);
        }
      }
    }

    return Promise.reject(new Error('요청 도중 에러 발생'));
  } catch (error) {
    return Promise.reject(error);
  }
};
