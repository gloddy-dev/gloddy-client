'use client';
import { useTranslation } from '../i18n/client';
import { cookieName } from '../i18n/settings';
import { postFCMToken, usePostFCMToken } from '@/apis/notifications';
import { useDidMount } from '@/hooks/common/useDidMount';
import useAppRouter from '@/hooks/useAppRouter';
import { hasToken } from '@/utils/auth/tokenController';
import { getLocalCookie, setLocalCookie } from '@/utils/cookieController';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { afterDay60 } from '@/utils/date';
import { getIsApp } from '@/utils/getIsApp';
import { useEffect } from 'react';

export default function Home() {
  const { i18n } = useTranslation('common');
  const { replace } = useAppRouter();
  const isapp = getIsApp();

  useEffect(() => {
    if (!isapp) return;
    const listener = (event: any) => {
      const { data, type } = JSON.parse(event.data);
      copyToClipboard(data);
      switch (type) {
        case 'FCM_TOKEN':
          postFCMToken({ token: data });
      }
    };

    document.addEventListener('message', listener);
    window.addEventListener('message', listener);
    return () => {
      document.removeEventListener('message', listener);
      window.removeEventListener('message', listener);
    };
  }, [isapp]);

  useDidMount(async () => {
    const cookieLanguage = getLocalCookie(cookieName);
    const deviceLanguage = navigator.language === 'ko-KR' ? 'ko' : 'en';
    const browserLanguage = cookieLanguage || deviceLanguage;

    setLocalCookie(cookieName, browserLanguage, { expires: afterDay60 });
    await i18n.changeLanguage(browserLanguage);

    if (hasToken()) replace(`/${browserLanguage}/grouping`);
    else replace(`/${browserLanguage}/join?step=1`);
  });
}
