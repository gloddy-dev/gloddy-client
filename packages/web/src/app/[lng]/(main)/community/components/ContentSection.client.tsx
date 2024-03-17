'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { useTranslation } from '@/app/i18n/client';
import { Loading } from '@/components/Loading';
import { Tabs } from '@/components/Tabs';

const AllContent = dynamic(() => import('./AllContent.client'));
const KpopContent = dynamic(() => import('./KpopContent'));
const LanguageContent = dynamic(() => import('./LanguageContent.client'));
const QuestionContent = dynamic(() => import('./QuestionContent.client'));

export default function ContentSection() {
  const { t } = useTranslation('community');

  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab text={t('category.All')} value="all" />
        <Tabs.Tab text={t('category.K-POP')} value="kpop" />
        <Tabs.Tab text={t('category.Q&A')} value="question" />
        <Tabs.Tab text={t('category.Language')} value="language" />
      </Tabs.List>
      <Tabs.Panel value="all">
        <Suspense fallback={<Loading />}>
          <AllContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="kpop">
        <Suspense fallback={<Loading />}>
          <KpopContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="question">
        <Suspense fallback={<Loading />}>
          <QuestionContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="language">
        <Suspense fallback={<Loading />}>
          <LanguageContent />
        </Suspense>
      </Tabs.Panel>
    </Tabs>
  );
}
