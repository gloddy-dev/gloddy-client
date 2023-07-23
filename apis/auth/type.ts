export type LoginResponse = {
  errorCode: string;
  userId: number;
  authority: string;
  token: string;
};

export type SMSVerifiyRequest = {
  phoneNumber: string;
  verifyCode: string;
};
