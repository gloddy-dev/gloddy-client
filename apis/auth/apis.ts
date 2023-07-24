import publicApi from '../config/publicApi';

import type {
  EmailRequest,
  EmailVerifyRequest,
  LoginResponse,
  SMSRequest,
  SMSVerifiyRequest,
  SignUpRequest,
  SignUpResponse,
} from './type';
import type { AxiosResponse } from 'axios';

const TEST_ID = {
  email: 'testy54@soongsil.ac.kr',
  password: 'qwqw5533',
};

export const postLogin = () => publicApi.post<LoginResponse>('/auth/login', TEST_ID);

export const postSMS = (SMSData: SMSRequest) => publicApi.post('/auth/sms', SMSData);

export const postSMSVerify = (SMSVerifyData: SMSVerifiyRequest) =>
  publicApi.post('/auth/sms/verify-code', SMSVerifyData);

export const postEmail = (emailData: EmailRequest) => publicApi.post('/auth/email', emailData);

export const postEmailVerify = (emailVerifyData: EmailVerifyRequest) =>
  publicApi.post('/auth/verify-code', emailVerifyData);

export const postSignUp = (signUpData: SignUpRequest) =>
  publicApi.post<SignUpResponse>('/auth/sign-up', signUpData);
