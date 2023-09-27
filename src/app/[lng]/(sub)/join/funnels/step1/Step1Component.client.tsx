'use client';

import FormSection from './components/FormSection.client';
import NoticeSection from './components/NoticeSection.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';
import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';
import { AUTH_KEYS } from '@/constants/token';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import { getLocalCookie } from '@/utils/cookieController';
import { usePathname } from 'next/navigation';

export default function Step1Component() {
  const { t } = useTranslation('join');
  const pathname = usePathname();
  const accessToken = getLocalCookie(AUTH_KEYS.accessToken);
  const refreshToken = getLocalCookie(AUTH_KEYS.refreshToken);

  return (
    <main>
      <JoinTitleTextMessage>{t('enterPhoneNumber')}</JoinTitleTextMessage>
      <JoinTitleTextMessage>{pathname}</JoinTitleTextMessage>
      <JoinTitleTextMessage>{accessToken}</JoinTitleTextMessage>
      <JoinTitleTextMessage>{refreshToken}</JoinTitleTextMessage>
      <FormSection />
      <Spacing size={16} />
      <NoticeSection />
    </main>
  );
}
