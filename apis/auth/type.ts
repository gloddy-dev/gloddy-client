export interface LoginResponse {
  errorCode: string;
  userId: number;
  authority: string;
  token: string;
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
  gender: string;
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
