'use client';

import { ArticleSection, NoticeSection } from './articles';
import DetailContent from './detail/DetailContent.client';
import TopSection from './TopSection.client';
import { useGetGroupDetail } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { FloatAddButton } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { Tabs } from '@/components/Tabs';
import { useNumberParams } from '@/hooks/useNumberParams';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

export default function GroupDetailPage() {
  const pathname = usePathname();
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
          <DetailContent />
        </Tabs.Panel>
        <Tabs.Panel value="articles">
          <Suspense>
            <NoticeSection />
            <ArticleSection />
            <div className="bottom-fixed flex justify-end">
              <Link href={`${pathname}/write`}>
                <FloatAddButton />
              </Link>
            </div>
          </Suspense>
        </Tabs.Panel>
      </Tabs>

      <Spacing size={60} />
    </>
  );
}
