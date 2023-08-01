import { BASE_API_URL } from '@/constants';
import axios, { AxiosResponse } from 'axios';

import type { CustomInstance } from './type';

const publicApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api/v1`,
  withCredentials: true,
});

publicApi.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (response: AxiosResponse) => response.data
);

export default publicApi;
