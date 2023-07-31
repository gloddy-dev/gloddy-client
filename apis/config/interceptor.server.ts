import { ApiError } from './customError';
import privateApi from './privateApi.server';
import { AUTH_COOKIE_KEYS, ErrorType } from './type';
import { getAccessTokenServer } from '@/utils/auth/tokenValidator.server';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const onRequestServer = async (config: InternalAxiosRequestConfig) => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get(AUTH_COOKIE_KEYS.accessToken)?.value;

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
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  try {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      if (error.response.status === 403) {
        try {
          // 토큰 만료
          const cookieStore = cookies();
          const refreshToken = cookieStore.get(AUTH_COOKIE_KEYS.refreshToken)?.value;

          const validTokenResponse = await getAccessTokenServer({ refreshToken });
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
            if (!prevRequest) {
              throw new ApiError('에러 발생', '이전 정보가 없습니다.', 403, new Date());
            }
            prevRequest.headers['Authorization'] = `Bearer ${validTokenResponse}`;
            return privateApi(prevRequest);
          }
        } catch (e) {
          // server-side 로그아웃 처리
          redirect('/join');
          return Promise.reject(e);
        }
      }
      console.log(error);
    } else {
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message);
    }

    return Promise.reject(new Error('요청 도중 에러 발생'));
  } catch (e) {
    return Promise.reject(e);
  }
};
