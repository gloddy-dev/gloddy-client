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

export const useLoginMutation = () => useMutation(postLogin);

export const useReissueMutation = () => useMutation(postReissue);

export const useSMSMutation = () => useMutation(postSMS);

export const useSMSVerifyMutation = () => useMutation(postSMSVerify);

export const useEmailMutation = () => useMutation(postEmail);

export const useEmailVerifyMutation = () => useMutation(postEmailVerify);

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
  });
};
