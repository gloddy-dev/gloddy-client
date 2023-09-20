'use client';
import { postReissue } from '@/apis/auth';
import { AUTH_KEYS } from '@/constants/token';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import { afterDay60 } from '@/utils/date';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { useCallback, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const checkToken = useCallback(async () => {
    const { accessToken, refreshToken } = (await getTokenFromCookie()) as {
      accessToken: string;
      refreshToken: string;
    };

    if (accessToken && refreshToken) router.push('/grouping');

    try {
      const {
        token: { accessToken: reIssuedAccessToken, refreshToken: reIssuedRefreshToken },
      } = await postReissue(
        { accessToken, refreshToken },
        { headers: { 'X-AUTH-TOKEN': accessToken } }
      );

      const response = NextResponse.next();
      response.cookies.set(AUTH_KEYS.accessToken, reIssuedAccessToken, {
        expires: afterDay60,
      });
      response.cookies.set(AUTH_KEYS.refreshToken, reIssuedRefreshToken, {
        expires: afterDay60,
      });

      router.push('/grouping');
    } catch (e) {
      console.log(e);
      router.push('/join');
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, [checkToken]);
}
