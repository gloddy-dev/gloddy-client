'use client';

import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { getLocalCookie, setLocalCookie } from '@/utils/cookieController';
import { afterDay60 } from '@/utils/date';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { t, i18n } = useTranslation('common');

  const prevLanguage = getLocalCookie('i18next');
  const [language, setLanguage] = useState(prevLanguage || 'en');

  const handleSubmit = () => {
    setLocalCookie('i18next', language, {
      expires: afterDay60,
    });
    i18n.changeLanguage(language);
  };

  return (
    <Flex className="px-20 text-subtitle-2 text-sign-secondary" direction="column">
      <Flex className="py-12" onClick={() => setLanguage('ko')}>
        <CircleCheckbox checked={language === 'ko'} />
        <Spacing size={8} direction="horizontal" />
        <span>한글</span>
      </Flex>
      <Flex className="py-12" onClick={() => setLanguage('en')}>
        <CircleCheckbox checked={language === 'en'} />
        <Spacing size={8} direction="horizontal" />
        <span>English</span>
      </Flex>
      <ButtonGroup>
        <Button onClick={handleSubmit} disabled={prevLanguage === language}>
          {t('confirm')}
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
