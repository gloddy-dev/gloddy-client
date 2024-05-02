'use client';

import { useSearchParams } from 'next/navigation';

import ArticlesContent from './articles/ArticlesContent';
import ChatContent from './chat/ChatContent';
import DetailContent from './detail/DetailContent';
import TopSection from './TopSection';

import { useGetGroupDetail } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { Tabs } from '@/components/Tabs';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function GroupDetail() {
  const { t } = useTranslation('groupDetail');
  const { groupId } = useNumberParams<['groupId']>();

  const searchParams = useSearchParams().get('tab');

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { myGroup } = groupDetailData;

  return (
    <>
      {searchParams !== 'chat' && <TopSection />}
      <Divider />
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="detail" text={t('details.tab')} />
          <Tabs.Tab value="articles" text={t('board.tab')} disabled={!myGroup} />
          <Tabs.Tab value="chat" text={t('board.chat')} />
        </Tabs.List>
        <Tabs.Panel value="detail">
          <DetailContent />
        </Tabs.Panel>
        <Tabs.Panel value="articles">
          <ArticlesContent />
        </Tabs.Panel>
        <Tabs.Panel value="chat">
          <ChatContent />
        </Tabs.Panel>
      </Tabs>
      <Spacing size={60} />
    </>
  );
}
