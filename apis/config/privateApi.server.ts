import { onResponse } from './interceptor';
import { onRequestServer, onResponseErrorServer } from './interceptor.server';
import { CustomInstance } from './type';
import { BASE_API_URL } from '@/constants';
import axios from 'axios';

const privateApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api/v1`,
  withCredentials: true,
});

privateApi.defaults.timeout = 2500;

privateApi.interceptors.request.use(onRequestServer);

privateApi.interceptors.response.use(onResponse, onResponseErrorServer);

export default privateApi;
