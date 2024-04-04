'use client';
import { Suspense } from 'react';

import CommunityArticles from './CommunityArticles';

import { useTranslation } from '@/app/i18n/client';
import { Loading } from '@/components/Loading';
import { Tabs } from '@/components/Tabs';

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
          <CommunityArticles categoryId={0} />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="kpop">
        <Suspense fallback={<Loading />}>
          <CommunityArticles categoryId={1} />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="question">
        <Suspense fallback={<Loading />}>
          <CommunityArticles categoryId={2} />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="language">
        <Suspense fallback={<Loading />}>
          <CommunityArticles categoryId={3} />
        </Suspense>
      </Tabs.Panel>
    </Tabs>
  );
}
