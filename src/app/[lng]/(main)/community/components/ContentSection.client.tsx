'use client';

import { Suspense } from 'react';

import AllContent from '@/app/[lng]/(main)/community/components/AllContent.client';
import CreateArticleButton from '@/app/[lng]/(main)/community/components/CreateArticleButton';
import KpopContent from '@/app/[lng]/(main)/community/components/KpopContent';
import LanguageContent from '@/app/[lng]/(main)/community/components/LanguageContent.client';
import QuestionContent from '@/app/[lng]/(main)/community/components/QuestionContent.client';
import { useTranslation } from '@/app/i18n/client';
import { Loading } from '@/components/Loading';
import { Tabs } from '@/components/Tabs';
import useAppRouter from '@/hooks/useAppRouter';

export default function ContentSection() {
  const { t } = useTranslation('community');
  const { push } = useAppRouter();

  return (
    <>
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
      <CreateArticleButton />
    </>
  );
}
