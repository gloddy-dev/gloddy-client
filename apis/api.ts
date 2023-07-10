import axios from 'axios';
import { BASE_API_URL } from '@/constants/common';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: BASE_API_URL,
});

function onRequest(config: InternalAxiosRequestConfig) {
  return config;
}

function onResponse(response: AxiosResponse) {
  return response;
}

function onResponseError(error: AxiosError) {
  return Promise.reject(error);
}

api.interceptors.request.use(onRequest);
api.interceptors.response.use(onResponse, onResponseError);

export default api;
