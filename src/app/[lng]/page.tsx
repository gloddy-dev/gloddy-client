'use client';
import { useTranslation } from '../i18n/client';
import { cookieName } from '../i18n/settings';
import { AUTH_KEYS } from '@/constants/token';
import { getLocalCookie, setLocalCookie } from '@/utils/cookieController';
import { afterDay60 } from '@/utils/date';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { i18n } = useTranslation('common');

  const checkTokenCookie = () => {
    const accessToken = getLocalCookie(AUTH_KEYS.accessToken);
    const refreshToken = getLocalCookie(AUTH_KEYS.refreshToken);

    router.refresh();
    alert(accessToken);
    if (accessToken || refreshToken) {
      alert(1);
      router.push('/grouping');
    } else {
      alert(2);
      router.push('/join?step=1');
    }
  };

  const listener = async (event: any) => {
    const { data } = await JSON.parse(event.data);
    setLocalCookie(cookieName, data, {
      expires: afterDay60,
    });

    i18n.changeLanguage(data);

    checkTokenCookie();
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
