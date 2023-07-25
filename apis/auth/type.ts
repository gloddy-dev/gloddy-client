import { ImageType } from '@/types';

export type LoginResponse = {
  errorCode: string;
  userId: number;
  authority: string;
  token: string;
};

export type SMSRequest = {
  number: string;
};

export type SMSVerifiyRequest = {
  number: string;
  code: string;
};

export type EmailRequest = {
  email: string;
};

export type EmailVerifyRequest = {
  email: string;
  authCode: number;
};

export type SignUpRequest = {
  phoneNumber: string;
  imageUrl?: string;
  schoolInfo: {
    school: string;
    email?: string;
    certifiedStudent: boolean; // email이 없는 경우 false
  };
  nickname: string;
  birth: string;
  gender: string;
  personalities: string[];
};

export type SignUpResponse = {
  authority: string;
  errorCode: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
  userId: number;
};
