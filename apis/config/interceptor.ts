import { ErrorType } from './api.types';
import { ApiError } from './customError';
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const onRequestError = (error: AxiosError) => {
  Promise.reject(error);
};

export const onResponse = (response: AxiosResponse) => {
  return response.data;
};

export const onResponseError = (error: AxiosError<ErrorType, InternalAxiosRequestConfig>) => {
  if (error.response) {
    const data = error.response.data;
    const { success, statusCode, errorCode, reason } = data;
    console.log(data);
    return Promise.reject(new ApiError(success, statusCode, errorCode, reason));
  }
  if (error.request) console.log(error.request);
  else console.log('Error', error.message);

  return Promise.reject(new Error('요청 도중 에러 발생'));
};
