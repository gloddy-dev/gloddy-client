import { postEmail, postEmailVerify, postSMS, postSMSVerify, postSignUp } from './apis';
import {
  EmailRequest,
  EmailVerifyRequest,
  SMSRequest,
  SMSVerifiyRequest,
  SignUpRequest,
} from './type';
import { useMutation } from '@tanstack/react-query';

export const useSMSMutation = () => {
  return useMutation(postSMS, {
    onError: (error) => {
      // TODO : 휴대폰 번호 에러에 대한 처리
    },
  });
};

export const useSMSVerifyMutation = () => {
  return useMutation(postSMSVerify, {
    onError: (error) => {
      // TODO : 인증번호 에러에 대한 처리
    },
  });
};

export const useEmailMutation = () => {
  return useMutation(postEmail, {
    onError: (error) => {
      // TODO : 이메일 에러에 대한 처리
    },
  });
};

export const useEmailVerifyMutation = () => {
  return useMutation(postEmailVerify, {
    onError: (error) => {
      // TODO : 이메일 에러에 대한 처리
    },
  });
};

export const useSignUpMutation = () => {
  return useMutation(postSignUp, {
    onError: (error) => {
      // TODO : 회원가입 에러에 대한 처리
    },
  });
};
