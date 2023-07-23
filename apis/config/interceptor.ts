import { ApiError } from './customError';
import { ErrorType } from './type';
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const onRequestError = (error: AxiosError) => {
  Promise.reject(error);
};

export const onResponse = (response: AxiosResponse) => {
  return response.data;
};

export const onResponseError = (error: AxiosError<ErrorType, InternalAxiosRequestConfig>) => {
  console.error('error', error);
  try {
    if (error.response) {
      const data = error.response.data;
      const { message, reason, status, timestamp } = data;

      if (status === 401) {
        // TODO: 토큰 재발급 로직
      }
      if (status === 400) {
        return Promise.reject(message);
      }
      return Promise.reject(new ApiError(message, reason, status, timestamp));
    }
    if (error.request) {
      // 요청이 이루어 졌으나 응답을 받지 못했습니다.
      // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
      // Node.js의 http.ClientRequest 인스턴스입니다.
      console.log(error.request);
    } else {
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message);
    }

    return Promise.reject(new Error('요청 도중 에러 발생'));
  } catch (error) {
    return Promise.reject(error);
  }
};
