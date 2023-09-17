'use client';

import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { setLocalCookie } from '@/utils/cookieController';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { i18n, t } = useTranslation('common');
  const router = useRouter();
  const [isKorean, isEnglish] = [i18n.language === 'ko', i18n.language === 'en'];
  const [select, setSelect] = useState(isKorean ? 'ko' : 'en');

  const handleSubmit = () => {
    setLocalCookie('i18next', select);
    router.replace(`/${select}/grouping`);
  };

  return (
    <Flex className="px-20 text-subtitle-2 text-sign-secondary" direction="column">
      <Flex className="py-12" onClick={() => setSelect('ko')}>
        <CircleCheckbox checked={select === 'ko'} />
        <Spacing size={8} direction="horizontal" />
        <span>한글</span>
      </Flex>
      <Flex className="py-12" onClick={() => setSelect('en')}>
        <CircleCheckbox checked={select === 'en'} />
        <Spacing size={8} direction="horizontal" />
        <span>English</span>
      </Flex>
      <ButtonGroup>
        <Button onClick={handleSubmit}>{t('confirm')}</Button>
      </ButtonGroup>
    </Flex>
  );
}
