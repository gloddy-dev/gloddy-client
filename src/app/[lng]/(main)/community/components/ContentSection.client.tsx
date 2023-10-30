'use client';

import AllContent from './AllContent.client';
import DailyContent from './DailyContent.client';
import LanguageContent from './LanguageContent.client';
import QuestionContent from './QuestionContent.client';
import { useTranslation } from '@/app/i18n/client';
import { Tabs } from '@/components/Tabs';
import { Suspense } from 'react';

export default function ContentSection() {
  const { t } = useTranslation('community');

  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab text={t('all')} value="all" />
        <Tabs.Tab text={t('daily')} value="daily" />
        <Tabs.Tab text={t('question')} value="question" />
        <Tabs.Tab text={t('language')} value="language" />
      </Tabs.List>
      <Tabs.Panel value="all">
        <Suspense>
          <AllContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="daily">
        <Suspense>
          <DailyContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="question">
        <Suspense>
          <QuestionContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="language">
        <Suspense>
          <LanguageContent />
        </Suspense>
      </Tabs.Panel>
    </Tabs>
  );
}
