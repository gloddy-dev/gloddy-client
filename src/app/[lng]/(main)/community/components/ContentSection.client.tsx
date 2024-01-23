'use client';

import AllContent from '@/app/[lng]/(main)/community/components/AllContent.client';
import CreateArticleButton from '@/app/[lng]/(main)/community/components/CreateArticleButton';
import KpopContent from '@/app/[lng]/(main)/community/components/KpopContent';
import LanguageContent from '@/app/[lng]/(main)/community/components/LanguageContent.client';
import QuestionContent from '@/app/[lng]/(main)/community/components/QuestionContent.client';
import { useTranslation } from '@/app/i18n/client';
import { Tabs } from '@/components/Tabs';

export default function ContentSection() {
  const { t } = useTranslation('community');

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
          <AllContent />
        </Tabs.Panel>
        <Tabs.Panel value="kpop">
          <KpopContent />
        </Tabs.Panel>
        <Tabs.Panel value="question">
          <QuestionContent />
        </Tabs.Panel>
        <Tabs.Panel value="language">
          <LanguageContent />
        </Tabs.Panel>
      </Tabs>
      <CreateArticleButton />
    </>
  );
}
