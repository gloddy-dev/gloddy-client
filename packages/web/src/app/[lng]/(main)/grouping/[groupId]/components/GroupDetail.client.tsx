'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import TopSection from './TopSection.client';

import { useGetGroupDetail } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { Tabs } from '@/components/Tabs';
import { useNumberParams } from '@/hooks/useNumberParams';

const DetailContent = dynamic(() => import('./detail/DetailContent.client'));
const ArticlesContent = dynamic(() => import('./articles/ArticlesContent.client'));

export default function GroupDetailPage() {
  const { t } = useTranslation('groupDetail');
  const { groupId } = useNumberParams<['groupId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { myGroup } = groupDetailData;

  return (
    <>
      <TopSection />
      <Divider />
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="detail" text={t('details.tab')} />
          <Tabs.Tab value="articles" text={t('board.tab')} disabled={!myGroup} />
        </Tabs.List>
        <Tabs.Panel value="detail">
          <Suspense>
            <DetailContent />
          </Suspense>
        </Tabs.Panel>
        <Tabs.Panel value="articles">
          <Suspense>
            <ArticlesContent />
          </Suspense>
        </Tabs.Panel>
      </Tabs>
      <Spacing size={60} />
    </>
  );
}
