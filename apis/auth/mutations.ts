import { postSMS, postSMSVerify } from './apis';
import { SMSRequest, SMSVerifiyRequest } from './type';
import { useMutation } from '@tanstack/react-query';

export const useSMSVerifyMutation = () => {
  return useMutation({
    mutationFn: (verifyData: SMSVerifiyRequest) => postSMSVerify(verifyData),
    onError: (error) => {
      // TODO : 인증번호 에러에 대한 처리
    },
  });
};

export const useSMSMutation = () => {
  return useMutation({
    mutationFn: (smsData: SMSRequest) => postSMS(smsData),
    onError: (error) => {
      // TODO : 휴대폰 번호 에러에 대한 처리
    },
  });
};
