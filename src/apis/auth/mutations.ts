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

export const useReissueMutation = () => useMutation({ mutationFn: postReissue });

export const useSMSMutation = () => useMutation({ mutationFn: postSMS });

export const useSMSVerifyMutation = () => useMutation({ mutationFn: postSMSVerify });

export const useEmailMutation = () => useMutation({ mutationFn: postEmail });

export const useEmailVerifyMutation = () => useMutation({ mutationFn: postEmailVerify });

export const useSignUpMutation = () => {
  const { push } = useAppRouter();
  return useMutation({
    mutationFn: postSignUp,
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
