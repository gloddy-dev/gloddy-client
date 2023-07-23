import publicApi from '../config/publicApi';

import type { LoginResponse, SMSVerifiyRequest } from './type';

const TEST_ID = {
  email: 'testy54@soongsil.ac.kr',
  password: 'qwqw5533',
};

export const postLogin = () => {
  return publicApi.post<LoginResponse>('/api/v1/auth/login', TEST_ID);
};

export const postSMS = ({ phoneNumber }: { phoneNumber: string }) => {
  return publicApi.post('/api/v1/auth/sms', { number: phoneNumber });
};

export const postSMSVerify = ({ phoneNumber, verifyCode }: SMSVerifiyRequest) =>
  publicApi.post('/api/v1/auth/sms/verify-code', {
    number: phoneNumber,
    code: verifyCode,
  });

export const postEmail = ({ email }: { email: string }) =>
  publicApi.post('/api/v1/auth/email', { email });

export const postSignUp = () => {
  const obj = {
    phoneNumber: '010-0000-0000',
    imageUrl: 'string',
    schoolInfo: {
      school: 'string',
      email: 'string',
      certifiedStudent: true,
    },
    nickname: 'string',
    birth: '2023-07-22',
    gender: 'MAIL',
    personalities: ['OUTGOING'],
  };

  return publicApi.post('/api/v1/auth/sign-up', obj);
};
