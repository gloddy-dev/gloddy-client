import type { GenderType } from '@/types';

export interface LoginRequest {
  phoneNumber: string;
}

export interface LoginResponse {
  errorCode: string;
  userId: number;
  authority: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
  existUser: boolean;
}

export interface ReissueRequest {
  refreshToken: string;
  accessToken: string;
}

export interface ReissueResponse {
  errorCode: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface SMSRequest {
  number: string;
}

export interface SMSVerifiyRequest {
  number: string;
  code: string;
}
export interface SchoolSearchResponse {
  schools: Array<{
    name: string;
    address: string;
  }>;
}

export interface EmailRequest {
  email: string;
}

export interface EmailVerifyRequest {
  email: string;
  authCode: number;
}

export interface SignUpRequest {
  phoneNumber: string;
  imageUrl?: string;
  schoolInfo: {
    school: string;
    email?: string;
    certifiedStudent: boolean; // email이 없는 경우 false
  };
  nickname: string;
  birth: string;
  gender: GenderType;
  personalities: string[];
  countryName: string;
  countryImage: string;
}

export interface SignUpResponse {
  authority: string;
  errorCode: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
  userId: number;
}

export interface NicknameDuplicateResponse {
  isExistNickname: boolean;
}
