'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { cookieName } from '@/app/i18n/settings';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import useAppRouter from '@/hooks/useAppRouter';
import { getLocalCookie, setLocalCookie } from '@/utils/cookieController';
import { afterDay60 } from '@/utils/date';

export default function Language() {
  const { t, i18n } = useTranslation('common');
  const { refresh, push, reset } = useAppRouter();

  const prevLanguage = getLocalCookie(cookieName);
  const [language, setLanguage] = useState(prevLanguage || i18n.language || 'en');

  const handleSubmit = () => {
    setLocalCookie(cookieName, language, {
      expires: afterDay60,
    });
    i18n.changeLanguage(language);
    refresh();
    reset();
  };

  return (
    <Flex className="text-subtitle-2 text-sign-secondary px-20" direction="column">
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
