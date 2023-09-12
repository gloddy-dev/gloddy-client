'use client';

import { ArticleSection, NoticeSection } from './articles';
import { LocationSection, MemberSection, TimeSection } from './detail';
import TopSection from './TopSection.client';
import { useGetGroupDetail } from '@/apis/groups';
import { Button, ButtonGroup, FloatAddButton } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { Tabs } from '@/components/Tabs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface GroupDetailProps {
  groupId: number;
}

export default function GroupDetailPage({ groupId }: GroupDetailProps) {
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const router = useRouter();

  const { myGroup, isApplyWaited } = groupDetailData;

  return (
    <>
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
          <NoticeSection />
          <ArticleSection />
          <div className="bottom-fixed flex justify-end">
            <Link href={`/grouping/${groupId}/write`}>
              <FloatAddButton />
            </Link>
          </div>
        </Tabs.Panel>
      </Tabs>

      <Spacing size={60} />
      {!myGroup && (
        <ButtonGroup>
          <Button
            onClick={() => router.push(`/grouping/${groupId}/apply`)}
            disabled={isApplyWaited}
          >
            {isApplyWaited ? '승인 대기 중' : '모임 가입하기'}
          </Button>
        </ButtonGroup>
      )}
    </>
  );
}
