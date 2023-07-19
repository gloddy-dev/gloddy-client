import { onRequestError, onResponse, onResponseError } from './interceptor';
import { onRequestClient } from './interceptor.client';
import { BASE_API_URL } from '@/constants';
import axios from 'axios';

const privateApi = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

privateApi.interceptors.request.use(onRequestClient, onRequestError);

privateApi.interceptors.response.use(onResponse, onResponseError);

export default privateApi;
