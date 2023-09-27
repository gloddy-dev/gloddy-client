'use client';
import { cookieName } from '../i18n/settings';
import { useDidMount } from '@/hooks/common/useDidMount';
import { setLocalCookie } from '@/utils/cookieController';
import { afterDay60 } from '@/utils/date';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  const listener = async (event: any) => {
    const { data } = await JSON.parse(event.data);
    setLocalCookie(cookieName, data, {
      expires: afterDay60,
    });

    router.refresh();
    router.push(`/${data}/join?step=1`);
  };

  useEffect(() => {
    if (!window.ReactNativeWebView) {
      router.push('/grouping');
      return;
    }

    document.addEventListener('message', listener); /* Android */
    window.addEventListener('message', listener); /* iOS */

    return () => {
      document.removeEventListener('message', listener); /* Android */
      window.removeEventListener('message', listener); /* iOS */
    };
  }, []);
}
