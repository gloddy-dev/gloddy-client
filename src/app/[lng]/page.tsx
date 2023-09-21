'use client';
import { useDidMount } from '@/hooks/common/useDidMount';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const checkLanguageCookie = () => {
    const listener = async (event: any) => {
      try {
        const response = await JSON.parse(event.data);
        const { data } = response;
        // setLocalCookie(cookieName, data, {
        //   expires: afterDay60,
        // });
        router.push(`/${data}/join?step=1`);
      } catch (e) {
        router.push('/join');
      }
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
      response.cookies.set(AUTH_KEYS.refreshToken, reIssuedRefreshToken, {
        expires: afterDay60,
    else router.push('/join?step=1');
  };

  useDidMount(() => {
    checkLanguageCookie();
    checkTokenCookie();
  });
}
