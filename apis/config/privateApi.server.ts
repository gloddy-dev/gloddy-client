import { CustomInstance } from './api.types';
import { onResponse } from './interceptor';
import { onRequestServer, onResponseErrorServer } from './interceptor.server';
import { BASE_API_URL } from '@/constants';
import axios from 'axios';

export const privateApi: CustomInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

privateApi.defaults.timeout = 2500;

privateApi.interceptors.request.use(onRequestServer);

privateApi.interceptors.response.use(onResponse, onResponseErrorServer);
