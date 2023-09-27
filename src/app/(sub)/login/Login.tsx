'use client';

import { LoginResponse, useLoginMutation } from '@/apis/auth';
import { Loading } from '@/components/Loading';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const { mutate: mutateLogin } = useLoginMutation();
  const router = useRouter();

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
            router.replace('/grouping');
            router.refresh();
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
