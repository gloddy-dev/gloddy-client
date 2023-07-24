import { onRequestError, onResponse, onResponseError } from './interceptor';
import { onRequestClient } from './interceptor.client';
import { BASE_API_URL } from '@/constants';
import axios from 'axios';

import type { CustomInstance } from './type';

const privateApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api/v1`,
  withCredentials: true,
});

privateApi.interceptors.request.use(onRequestClient, onRequestError);

privateApi.interceptors.response.use(onResponse, onResponseError);

export default privateApi;
