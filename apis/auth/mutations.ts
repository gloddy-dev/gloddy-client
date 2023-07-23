import { postSMSVerify } from './apis';
import { SMSVerifiyRequest } from './type';
import { useMutation } from '@tanstack/react-query';

export const useSMSVerify = () => {
  return useMutation({
    mutationFn: (verifyInfo: SMSVerifiyRequest) => postSMSVerify(verifyInfo),
    onError: (error) => {
      // TODO : 인증번호 에러에 대한 처리
    },
  });
};
