import { ErrorType } from './api.types';
import { ApiError } from './customError';
import { login } from '../auth';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const onRequestServer = async (config: InternalAxiosRequestConfig) => {
  try {
    const data = await login();
    const token = data.token;

    if (token) {
      config.headers['X-AUTH-TOKEN'] = token;
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
      const data = error.response.data;
      const { success, statusCode, errorCode, reason } = data;
      console.log(success, statusCode, errorCode, reason);

      if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }
    return Promise.reject(new Error('요청 도중 에러 발생'));
  } catch (e) {
    return Promise.reject(e);
  }
};
