import { ApiError } from './customError';
import privateApi from './privateApi.client';
import { ErrorType } from './type';
import { getAuthTokensByCookie } from '@/utils/auth';
import { getAccessTokenClient } from '@/utils/auth/tokenValidator.client';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';

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
      if (error.response.status === 403) {
        try {
          const auth = getAuthTokensByCookie(document.cookie);
          const validTokenResponse = await getAccessTokenClient(auth);
          if (!validTokenResponse) {
            throw new ApiError(
              '에러 발생',
              'accessToken 발급중 오류가 발생했습니다.',
              403,
              new Date()
            );
          } else if (validTokenResponse instanceof ApiError) {
            throw validTokenResponse;
          } else {
            const prevRequest = error.config;
            if (!prevRequest)
              throw new ApiError('에러 발생', '이전 정보가 없습니다.', 401, new Date());

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
