'use client';

import { ArticleList, NoticeList } from './articles';
import { LocationSection, MemberSection, TimeSection } from './detail';
import GroupDetailHeader from './GroupDetailHeader.client';
import TopSection from './TopSection.client';
import { useGetGroupDetail } from '@/apis/groups';
import { BottomFixedDiv } from '@/components/BottomFixedDiv';
import { Button, ButtonGroup, FloatAddButton } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Tabs } from '@/components/Tabs';
import Link from 'next/link';

interface GroupDetailProps {
  groupId: number;
}

export default function GroupDetailPage({ groupId }: GroupDetailProps) {
  const { data: groupDetailData } = useGetGroupDetail(groupId);

  const { myGroup, isApplyWaited } = groupDetailData;

  return (
    <>
      <GroupDetailHeader />
      <TopSection />
      <Divider />
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="detail" text="상세정보" />
          <Tabs.Tab value="articles" text="게시판" disabled={!myGroup} />
        </Tabs.List>
        <Tabs.Panel value="detail">
          <div className="px-20">
            <Spacing size={20} />
            <MemberSection />
            <Spacing size={36} />
            <TimeSection />
            <Spacing size={28} />
            <LocationSection />
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="articles">
          <NoticeList />
          <ArticleList />
          <BottomFixedDiv className="flex justify-end">
            <Link href={`/grouping/${groupId}/write`}>
              <FloatAddButton />
            </Link>
          </BottomFixedDiv>
        </Tabs.Panel>
      </Tabs>

      <Spacing size={100} />
      {!myGroup && (
        <ButtonGroup>
          <Button as="a" href={`/grouping/${groupId}/apply`} disabled={isApplyWaited}>
            {isApplyWaited ? '승인 대기 중' : '모임 가입하기'}
          </Button>
        </ButtonGroup>
      )}
    </>
  );
}
