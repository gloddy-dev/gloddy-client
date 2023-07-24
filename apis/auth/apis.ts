import publicApi from '../config/publicApi';

import type { EmailRequest, LoginResponse, SMSRequest, SMSVerifiyRequest } from './type';

const TEST_ID = {
  email: 'testy54@soongsil.ac.kr',
  password: 'qwqw5533',
};

export const postLogin = () => publicApi.post<LoginResponse>('/auth/login', TEST_ID);

export const postSMS = ({ phoneNumber }: SMSRequest) =>
  publicApi.post('/auth/sms', { number: phoneNumber });

export const postSMSVerify = ({ phoneNumber, verifyCode }: SMSVerifiyRequest) =>
  publicApi.post('/auth/sms/verify-code', {
    number: phoneNumber,
    code: verifyCode,
  });

export const postEmail = ({ email }: EmailRequest) => publicApi.post('/auth/email', { email });

// Test용 Dummy Data
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

export const postSignUp = () => publicApi.post('/auth/sign-up', obj);
