import { baseFetch } from '../config/baseFetch';
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
  SchoolSearchResponse,
  SignUpRequest,
  SignUpResponse,
} from './type';

export const postLogin = (loginData: LoginRequest) =>
  publicApi.post<LoginResponse>('/auth/login', loginData);

export const postReissue = async (ReissueData: ReissueRequest, requestInit?: RequestInit) =>
  baseFetch.post<ReissueResponse>('/auth/token-reissue', {
    body: JSON.stringify(ReissueData),
    ...requestInit,
  });

export const postSMS = (SMSData: SMSRequest) => publicApi.post('/auth/sms', SMSData);

export const postSMSVerify = (SMSVerifyData: SMSVerifiyRequest) =>
  publicApi.post('/auth/sms/verify-code', SMSVerifyData);

export const getSchoolSearch = (searchWord: string) =>
  publicApi.get<SchoolSearchResponse>(`search/schools?keyword=${searchWord}`);

export const postEmail = (emailData: EmailRequest) => publicApi.post('/auth/email', emailData);

export const postEmailVerify = (emailVerifyData: EmailVerifyRequest) =>
  publicApi.post('/auth/verify-code', emailVerifyData);

export const postSignUp = (signUpData: SignUpRequest) =>
  publicApi.post<SignUpResponse>('/auth/sign-up', signUpData);
