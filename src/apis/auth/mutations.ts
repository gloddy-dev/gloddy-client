import {
  SignUpResponse,
  postEmail,
  postEmailVerify,
  postLogin,
  postReissue,
  postSMS,
  postSMSVerify,
  postSignUp,
} from '.';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  return useMutation(postSignUp, {
    onSuccess: (data: SignUpResponse) => {
      const {
        userId,
        token: { accessToken, refreshToken },
      } = data;
      setTokenAtCookie({ accessToken, refreshToken, userId });
      router.push('grouping');
    },
    onError: (error) => {
      // TODO : 회원가입 에러에 대한 처리
    },
  });
};
