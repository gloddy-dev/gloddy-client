import { onResponse, onResponseError } from './interceptor';
import { BASE_API_URL } from '@/constants';
import axios from 'axios';

import type { CustomInstance } from './type';

const publicApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api/v1`,
  withCredentials: true,
});

publicApi.interceptors.response.use(onResponse, onResponseError);

export default publicApi;
