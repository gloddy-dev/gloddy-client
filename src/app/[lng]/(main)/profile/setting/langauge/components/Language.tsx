'use client';

import { Button } from '@/components/Button';
import { Flex } from '@/components/Layout';
import { setLocalCookie } from '@/utils/cookieController';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { i18n } = useTranslation();

  const router = useRouter();
  const handleKorean = () => {
    setLocalCookie('i18next', 'ko');
    i18n.changeLanguage('ko');
    router.replace('/ko/grouping');
  };
  const handleEnglish = () => {
    setLocalCookie('i18next', 'en');
    i18n.changeLanguage('en');
    router.replace('/en/grouping');
  };
  return (
    <Flex>
      <Button onClick={handleKorean}>한글</Button>
      <Button onClick={handleEnglish}>영어</Button>
    </Flex>
  );
}
