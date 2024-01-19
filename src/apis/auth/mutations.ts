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
import useAppRouter from '@/hooks/useAppRouter';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => useMutation({ mutationFn: postLogin });

export const useReissueMutation = () => useMutation(postReissue);

export const useSMSMutation = () => useMutation(postSMS);

export const useSMSVerifyMutation = () =>
  useMutation(postSMSVerify, {
    onError: () => {},
  });

export const useEmailMutation = () => useMutation(postEmail);

export const useEmailVerifyMutation = () => useMutation(postEmailVerify);

export const useSignUpMutation = () => {
  const { push } = useAppRouter();
  return useMutation(postSignUp, {
    onSuccess: (data: SignUpResponse) => {
      const {
        userId,
        token: { accessToken, refreshToken },
      } = data;
      setTokenAtCookie({ accessToken, refreshToken, userId });
      push('/grouping');
    },
  });
};
