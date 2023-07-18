import { onResponse, onResponseError } from './interceptor';
import { BASE_API_URL } from '@/constants';
import axios from 'axios';

const publicApi = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

publicApi.interceptors.response.use(onResponse, onResponseError);

export default publicApi;
