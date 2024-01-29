import {
  LoginResponse,
  SignUpResponse,
  postEmail,
  postEmailVerify,
  postLogin,
  postReissue,
  postSMS,
  postSMSVerify,
  postSignUp,
} from '.';
import useLogin from '@/hooks/token/useLogin';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => {
  const { login } = useLogin();
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async (response: LoginResponse) => {
      login({
        accessToken: response.token.accessToken,
        refreshToken: response.token.refreshToken,
        userId: response.userId,
      });
    },
  });
};
export const useReissueMutation = () => useMutation({ mutationFn: postReissue });

export const useSMSMutation = () => useMutation({ mutationFn: postSMS });

export const useSMSVerifyMutation = () => useMutation({ mutationFn: postSMSVerify });

export const useEmailMutation = () => useMutation({ mutationFn: postEmail });

export const useEmailVerifyMutation = () => useMutation({ mutationFn: postEmailVerify });

export const useSignUpMutation = () => {
  const { login } = useLogin();
  return useMutation({
    mutationFn: postSignUp,
    onSuccess: async (data: SignUpResponse) => {
      const {
        userId,
        token: { accessToken, refreshToken },
      } = data;
      await login({ accessToken, refreshToken, userId });
    },
  });
};
