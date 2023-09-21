'use client';
import { cookieName } from '../i18n/settings';
import { postReissue } from '@/apis/auth';
import { AUTH_KEYS } from '@/constants/token';
import { useDidMount } from '@/hooks/common/useDidMount';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import { getLocalCookie, setLocalCookie } from '@/utils/cookieController';
import { afterDay60 } from '@/utils/date';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { useCallback } from 'react';

export default function Home() {
  const router = useRouter();

  const listenRN = useCallback(() => {
    const listener = (event: any) => {
      const { data } = JSON.parse(event.data);
      setLocalCookie(cookieName, data, {
        expires: afterDay60,
      });
    };

    if (window.ReactNativeWebView) {
      document.addEventListener('message', listener); /* Android */
      window.addEventListener('message', listener); /* iOS */
      return () => {
        document.removeEventListener('message', listener);
        window.removeEventListener('message', listener);
      };
    }
    router.push('/join');
  }, [router]);

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
      router.push('/join');
    }
  }, [router]);

  useDidMount(() => {
    if (!!getLocalCookie(cookieName)) {
      checkToken();
      return;
    }

    listenRN();
  });
}
