import publicApi from '../config/publicApi';
import type { AxiosResponse } from 'axios';

import type {
  EmailRequest,
  EmailVerifyRequest,
  LoginResponse,
  SMSRequest,
  SMSVerifiyRequest,
  SignUpRequest,
  SignUpResponse,
} from './type';

const TEST_ID = {
  email: 'testy54@soongsil.ac.kr',
  password: 'qwqw5533',
};

export const postLogin = () =>
  publicApi.post<Promise<AxiosResponse<LoginResponse>>>('/api/v1/auth/login', TEST_ID);

export const postSMS = (SMSData: SMSRequest) => publicApi.post('/api/v1/auth/sms', SMSData);

export const postSMSVerify = (SMSVerifyData: SMSVerifiyRequest) =>
  publicApi.post('/api/v1/auth/sms/verify-code', SMSVerifyData);

export const postEmail = (emailData: EmailRequest) =>
  publicApi.post('/api/v1/auth/email', emailData);

export const postEmailVerify = (emailVerifyData: EmailVerifyRequest) =>
  publicApi.post('/api/v1/auth/verify-code', emailVerifyData);

export const postSignUp = (signUpData: SignUpRequest) =>
  publicApi.post<SignUpResponse>('/api/v1/auth/sign-up', signUpData);
