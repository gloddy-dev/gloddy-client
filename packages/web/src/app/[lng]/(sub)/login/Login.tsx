'use client';

import { LoginResponse, useLoginMutation } from '@/apis/auth';
import { Loading } from '@/components/Loading';
import useAppRouter from '@/hooks/useAppRouter';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useEffect } from 'react';

export default function Login() {
  const { mutate: mutateLogin } = useLoginMutation();
  const { refresh, replace } = useAppRouter();

  const handlegetTokenFromCookie = () => {
    mutateLogin(
      { phoneNumber: '010-2018-0262' },
      {
        onSuccess: (response: LoginResponse) => {
          setTokenAtCookie({
            accessToken: response.token.accessToken,
            refreshToken: response.token.refreshToken,
            userId: response.userId,
          }).then(() => {
            replace('/grouping');
            refresh();
          });
        },
      }
    );
  };

  useEffect(() => {
    handlegetTokenFromCookie();
  }, []);

  return <Loading className="h-screen" />;
}
