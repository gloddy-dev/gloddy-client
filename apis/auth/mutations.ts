import {
  postEmail,
  postEmailVerify,
  postLogin,
  postReissue,
  postSMS,
  postSMSVerify,
  postSignUp,
} from '.';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => {
  return useMutation(postLogin);
};

export const useReissueMutation = () => {
  return useMutation(postReissue);
};

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
