'use client';

import { useQueryClient } from '@tanstack/react-query';

import AllContent from './AllContent.client';
import CreateArticleButton from './CreateArticleButton';
import KpopContent from './KpopContent';
import LanguageContent from './LanguageContent.client';
import QuestionContent from './QuestionContent.client';
import { Keys } from '@/apis/community';
import { useTranslation } from '@/app/i18n/client';
import { Tabs } from '@/components/Tabs';
import { useBroadcastChannel } from '@/hooks/useBoradcast';

export interface CommunityChannelMessage {
  categoryId: number;
}

export default function ContentSection() {
  const { t } = useTranslation('community');
  const queryClient = useQueryClient();
  const { postMessage } = useBroadcastChannel<CommunityChannelMessage>('community', (message) => {
    queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(0) });
    queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(message.categoryId) });
  });

  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab text={t('all')} value="all" />
        <Tabs.Tab text={t('kpop')} value="kpop" />
        <Tabs.Tab text={t('question')} value="question" />
        <Tabs.Tab text={t('language')} value="language" />
      </Tabs.List>
      <Tabs.Panel value="all">
        <Suspense>
          <AllContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="kpop">
        <Suspense>
          <KpopContent />
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
