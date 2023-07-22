import publicApi from '../config/publicApi';

import type { LoginResponse } from './type';

const TEST_ID = {
  email: 'testy54@soongsil.ac.kr',
  password: 'qwqw5533',
};

export const postLogin = () => {
  return publicApi.post<LoginResponse>('/api/v1/auth/login', TEST_ID);
};

export const postSMS = ({ phoneNumber }: { phoneNumber: number }) => {
  return publicApi.post('/api/v1/auth/sms', { number: phoneNumber });
};

export const postEmail = ({ email }: { email: string }) => {
  return publicApi.post('/api/v1/auth/email', { email });
};
