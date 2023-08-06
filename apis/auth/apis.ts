import { privateFetch } from '../config/privateFetch';
import publicApi from '../config/publicApi';

import type {
  EmailRequest,
  EmailVerifyRequest,
  LoginRequest,
  LoginResponse,
  ReissueRequest,
  ReissueResponse,
  SMSRequest,
  SMSVerifiyRequest,
  SignUpRequest,
  SignUpResponse,
} from './type';

export const postLogin = (loginData: LoginRequest) =>
  publicApi.post<LoginResponse>('/auth/login', loginData);

export const postReissue = async (ReissueData: ReissueRequest) => {
  privateFetch.post<ReissueResponse>('/auth/token-reissue', { body: JSON.stringify(ReissueData) });
};

export const postSMS = (SMSData: SMSRequest) => publicApi.post('/auth/sms', SMSData);

export const postSMSVerify = (SMSVerifyData: SMSVerifiyRequest) =>
  publicApi.post('/auth/sms/verify-code', SMSVerifyData);

export const postEmail = (emailData: EmailRequest) => publicApi.post('/auth/email', emailData);

export const postEmailVerify = (emailVerifyData: EmailVerifyRequest) =>
  publicApi.post('/auth/verify-code', emailVerifyData);

export const postSignUp = (signUpData: SignUpRequest) =>
  publicApi.post<SignUpResponse>('/auth/sign-up', signUpData);
