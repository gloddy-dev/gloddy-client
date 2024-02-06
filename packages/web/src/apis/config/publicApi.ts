import axios, { AxiosResponse } from 'axios';

import type { CustomInstance } from './type';

import { BASE_API_URL } from '@/constants';

const publicApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api/v1`,
  withCredentials: true,
});

publicApi.interceptors.response.use((response: AxiosResponse) => response.data);

export default publicApi;
