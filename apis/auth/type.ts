export type LoginResponse = {
  errorCode: string;
  userId: number;
  authority: string;
  token: string;
};

export type SMSRequest = {
  phoneNumber: string;
};

export type SMSVerifiyRequest = {
  phoneNumber: string;
  verifyCode: string;
};

export type EmailRequest = {
  email: string;
};

export type EmailVerifyRequest = {
  email: string;
  authCode: string;
};
