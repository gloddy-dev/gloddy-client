'use client';
import { cookieName } from '../i18n/settings';
import { useDidMount } from '@/hooks/common/useDidMount';
import { hasToken } from '@/utils/auth/tokenController';
import { getLocalCookie, setLocalCookie } from '@/utils/cookieController';
import { afterDay60 } from '@/utils/date';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const router = useRouter();
  const { i18n } = useTranslation();

  useDidMount(async () => {
    const cookieLanguage = getLocalCookie(cookieName);
    const deviceLanguage = navigator.language === 'ko-KR' ? 'ko' : 'en';
    const browserLanguage = cookieLanguage || deviceLanguage;

    setLocalCookie(cookieName, browserLanguage, { expires: afterDay60 });
    await i18n.changeLanguage(browserLanguage);

    if (hasToken()) router.push(`/${browserLanguage}/grouping`);
    else router.push(`/${browserLanguage}/join?step=1`);
  });
}
