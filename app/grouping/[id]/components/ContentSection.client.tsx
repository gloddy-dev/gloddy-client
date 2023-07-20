'use client';
import { BottomFixedButton } from '@/components/common/Button';
import Tabs from '@/components/common/Tabs';
import { useRouter, useSearchParams } from 'next/navigation';

import type { TabType } from '../type';

interface ContentSectionProps {
  groupingId: string;
  detailNode: React.ReactNode;
  boardNode: React.ReactNode;
  isLeader?: boolean;
}

export default function ContentSection({
  groupingId,
  detailNode,
  boardNode,
  isLeader,
}: ContentSectionProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentTab = (searchParams.get('tab') ?? 'detail') as TabType;

  return (
    <section>
      <Tabs defaultActiveTab={currentTab}>
        <Tabs.List>
          <Tabs.Tab value="detail" text="상세정보" />
          <Tabs.Tab value="board" text="게시판" />
        </Tabs.List>
        <Tabs.Panel value="detail">
          <div className="p-20">{detailNode}</div>
          {!isLeader && (
            <BottomFixedButton
              text="지원하기"
              onClick={() => router.push(`/grouping/${groupingId}/apply`)}
            />
          )}
        </Tabs.Panel>
        <Tabs.Panel value="board">
          <div className="p-20">{boardNode}</div>
          <BottomFixedButton
            text="글쓰기"
            onClick={() => router.push(`/grouping/${groupingId}/write`)}
          />
        </Tabs.Panel>
      </Tabs>
    </section>
  );
}
