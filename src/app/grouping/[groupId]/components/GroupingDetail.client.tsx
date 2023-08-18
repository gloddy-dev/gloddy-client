'use client';

import { ArticleList, NoticeList } from './board';
import { LocationSection, MemberSection, TimeSection } from './detail';
import GroupingHeader from './GroupingHeader.client';
import TopSection from './TopSection.client';
import { useGetGroupDetail } from '@/apis/groups';
import { BottomFixedDiv } from '@/components/BottomFixedDiv';
import { Button, ButtonGroup, FloatAddButton } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Tabs } from '@/components/Tabs';
import Link from 'next/link';

interface GroupingDetailProps {
  groupId: number;
}

export default function GroupingDetail({ groupId }: GroupingDetailProps) {
  const { data: groupDetailData } = useGetGroupDetail(groupId);

  const { myGroup } = groupDetailData;

  return (
    <main className="bg-white">
      <GroupingHeader />
      <TopSection />
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="detail" text="상세정보" />
          <Tabs.Tab value="board" text="게시판" />
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
        <Tabs.Panel value="board">
          <NoticeList />
          <ArticleList />
          {myGroup && (
            <BottomFixedDiv className="flex justify-end">
              <Link href={`/grouping/${groupId}/write`}>
                <FloatAddButton />
              </Link>
            </BottomFixedDiv>
          )}
        </Tabs.Panel>
      </Tabs>

      <Spacing size={100} />
      {!myGroup && (
        <ButtonGroup>
          <Button as="a" href={`/grouping/${groupId}/apply`}>
            모임 가입하기
          </Button>
        </ButtonGroup>
      )}
    </main>
  );
}
