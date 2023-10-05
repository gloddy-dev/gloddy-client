'use client';
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
    const browserLanguage = (() => {
      const cookieLanguage = getLocalCookie('i18next');
      const deviceLanguage = navigator.language === 'ko-KR' ? 'ko' : 'en';

      if (cookieLanguage) return cookieLanguage;
      else return deviceLanguage;
    })();

    setLocalCookie('i18next', browserLanguage, { expires: afterDay60 });
    await i18n.changeLanguage(browserLanguage);

    if (hasToken()) router.push(`/${browserLanguage}/grouping`);
    else router.push(`/${browserLanguage}/join?step=1`);
  });
}
