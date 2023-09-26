'use client';
import { cookieName } from '../i18n/settings';
import { useDidMount } from '@/hooks/common/useDidMount';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import { setLocalCookie } from '@/utils/cookieController';
import { afterDay60 } from '@/utils/date';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const checkLanguageCookie = () => {
    const listener = async (event: any) => {
      const response = await JSON.parse(event.data);
      const { data } = response;
      setLocalCookie(cookieName, data, {
        expires: afterDay60,
      });
    };

    if (window.ReactNativeWebView) {
      document.addEventListener('message', listener); /* Android */
      window.addEventListener('message', listener); /* iOS */
    } else {
      router.push('/join');
    }
  };

  const checkTokenCookie = async () => {
    const { accessToken, refreshToken } = await getTokenFromCookie();

    if (accessToken && refreshToken) router.push('/grouping');
    else router.push('/join?step=1');
  };

  useDidMount(async () => {
    await checkLanguageCookie();
    await checkTokenCookie();
  });
}
