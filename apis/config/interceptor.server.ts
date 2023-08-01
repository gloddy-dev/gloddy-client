import { ApiError } from './customError';
import privateApi from './privateApi.server';
import { type ErrorType } from './type';
import { AUTH_ERROR_CODES } from '@/constants/errorCode';
import { AUTH_KEYS } from '@/constants/token';
import { getAccessTokenServer } from '@/utils/auth/tokenValidator.server';
import { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const onRequestServer = async (config: InternalAxiosRequestConfig) => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get(AUTH_KEYS.accessToken)?.value;

    if (accessToken) {
      config.headers['X-AUTH-TOKEN'] = accessToken;
      return config;
    }
    throw new Error('로그인이 필요합니다.');
  } catch (error) {
    return Promise.reject(error);
  }
};

export const onResponseErrorServer = async (
  error: AxiosError<ErrorType, InternalAxiosRequestConfig>
) => {
  try {
    if (error.response) {
      if (error.response.status === AUTH_ERROR_CODES.EXPIRED_TOKEN_ERROR) {
        try {
          const cookieStore = cookies();
          const refreshToken = cookieStore.get(AUTH_KEYS.refreshToken)?.value;
          const accessToken = cookieStore.get(AUTH_KEYS.accessToken)?.value;
          const userId = cookieStore.get(AUTH_KEYS.userId)?.value as unknown as number;

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
};
