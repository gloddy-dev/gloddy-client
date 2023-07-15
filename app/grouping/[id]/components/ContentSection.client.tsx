'use client';
import { BottomFixedButton } from '@/components/common/Button';
import Tabs from '@/components/common/Tabs';
import { useSearchParams } from 'next/navigation';

import type { TabType } from '../type';

interface ContentSectionProps {
  detailNode: React.ReactNode;
  boardNode: React.ReactNode;
  isLeader?: boolean;
}

export default function ContentSection({ detailNode, boardNode, isLeader }: ContentSectionProps) {
  const searchParams = useSearchParams();

  const currentTab = (searchParams.get('tab') ?? 'detail') as TabType;

  const handleApplyClick = () => {};

  const handleWriteClick = () => {};

  return (
    <section>
      <Tabs defaultActiveTab={currentTab}>
        <Tabs.List>
          <Tabs.Tab value="detail" text="상세정보" />
          <Tabs.Tab value="board" text="게시판" />
        </Tabs.List>
        <Tabs.Panel value="detail">
          <div className="p-20">{detailNode}</div>
          {!isLeader && <BottomFixedButton text="지원하기" onClick={handleApplyClick} />}
        </Tabs.Panel>
        <Tabs.Panel value="board">
          <div className="p-20">{boardNode}</div>
          <BottomFixedButton text="글쓰기" onClick={handleWriteClick} />
        </Tabs.Panel>
      </Tabs>
    </section>
  );
}
