import { GenderType } from '@/types';

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

export interface SMSRequest {
  number: string;
}

export interface SMSVerifiyRequest {
  number: string;
  code: string;
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
