'use client';

import { LoginResponse, useLoginMutation } from '@/apis/auth';
import { Loading } from '@/components/Loading';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const { mutate: mutateLogin } = useLoginMutation();
  const router = useRouter();

  const handlegetTokenFromCookie = async () => {
    mutateLogin(
      { phoneNumber: '010-2018-0262' },
      {
        onSuccess: (response: LoginResponse) => {
          if (response.existUser) {
            const {
              token: { accessToken, refreshToken },
              userId,
            } = response;
            setTokenAtCookie({
              accessToken,
              refreshToken,
              userId,
            });
          }
        },
      }
    );
  };

  useEffect(() => {
    handlegetTokenFromCookie();
    router.push('/grouping');
  }, []);

  return <Loading className="h-screen" />;
}
