import { postEmail, postEmailVerify, postSMS, postSMSVerify } from './apis';
import { EmailRequest, EmailVerifyRequest, SMSRequest, SMSVerifiyRequest } from './type';
import { useMutation } from '@tanstack/react-query';

export const useSMSMutation = () => {
  return useMutation({
    mutationFn: (SMSData: SMSRequest) => postSMS(SMSData),
    onError: (error) => {
      // TODO : 휴대폰 번호 에러에 대한 처리
    },
  });
};

export const useSMSVerifyMutation = () => {
  return useMutation({
    mutationFn: (SMSverifyData: SMSVerifiyRequest) => postSMSVerify(SMSverifyData),
    onError: (error) => {
      // TODO : 인증번호 에러에 대한 처리
    },
  });
};

export const useEmailMutation = () => {
  return useMutation({
    mutationFn: (emailData: EmailRequest) => postEmail(emailData),
    onError: (error) => {
      // TODO : 이메일 에러에 대한 처리
    },
  });
};

export const useEmailVerifyMutation = () => {
  return useMutation({
    mutationFn: (emailVerifyData: EmailVerifyRequest) => postEmailVerify(emailVerifyData),
    onError: (error) => {
      // TODO : 이메일 에러에 대한 처리
    },
  });
};
