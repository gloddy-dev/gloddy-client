'use client';
import { useTranslation } from '../i18n/client';
import { cookieName } from '../i18n/settings';

import { useAppRouter, useDidMount } from '@/hooks';
import { afterDay60, getLocalCookie, hasToken, setLocalCookie } from '@/utils';

export default function Home() {
  const { i18n } = useTranslation('common');
  const { replace } = useAppRouter();

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
