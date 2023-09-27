'use client';
import { cookieName } from '../i18n/settings';
import { useDidMount } from '@/hooks/common/useDidMount';
import { setLocalCookie } from '@/utils/cookieController';
import { afterDay60 } from '@/utils/date';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const checkLanguageCookie = async () => {
    const listener = async (event: any) => {
      const response = await JSON.parse(event.data);
      const { data } = response;
      setLocalCookie(cookieName, data, {
        expires: afterDay60,
      });

      router.refresh();
      router.push('/join');
    };

    if (window.ReactNativeWebView) {
      document.addEventListener('message', listener); /* Android */
      window.addEventListener('message', listener); /* iOS */
    } else {
      router.push('/grouping');
    }
  };

  useDidMount(() => {
    checkLanguageCookie();
  });
}
