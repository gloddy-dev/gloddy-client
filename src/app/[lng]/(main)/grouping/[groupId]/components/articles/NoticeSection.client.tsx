'use client';

import NoticeItem from './NoticeItem.client';
import { useGetGroupDetail, useGetNotices } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useBlockStore } from '@/store/useBlockStore';

export default function NoticeSection() {
  const { t } = useTranslation('groupDetail');
  const { blockNoticeIds } = useBlockStore();
  const { groupId } = useNumberParams<['groupId']>();

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isCaptain } = groupDetailData;

  const { data: noticesData } = useGetNotices(groupId);

  const notices = noticesData.filter((notice) => !blockNoticeIds.includes(notice.noticeId));

  return (
    <section className="p-20 pb-8">
      <div className="rounded-8 bg-card-ui p-16 text-subtitle-3 text-sign-secondary">
        <p className="pl-4">{t('board.notice')}</p>
        <Spacing size={6} />
        {notices.length ? (
          <ItemList
            data={notices}
            renderItem={(notice) =>
              !blockNoticeIds.includes(notice.noticeId) && (
                <NoticeItem notice={notice} groupId={groupId} isCaptain={isCaptain} />
              )
            }
          />
        ) : (
          <EmptyNotice />
        )}
      </div>
    </section>
  );
}

function EmptyNotice() {
  const { t } = useTranslation('groupDetail');

  return (
    <Flex align="center" className="gap-4 py-4">
      <Icon id="24-info" />
      <p>{t('board.emptyNotice')}</p>
    </Flex>
  );
}
