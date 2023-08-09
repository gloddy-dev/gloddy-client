'use client';
import Tabs from '@/components/common/Tabs';
import { useSearchParams } from 'next/navigation';

import type { TabType } from '../type';

interface ContentSectionProps {
  detailNode: React.ReactNode;
  boardNode: React.ReactNode;
}

export default function ContentSection({ detailNode, boardNode }: ContentSectionProps) {
  const searchParams = useSearchParams();

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
        </Tabs.Panel>
        <Tabs.Panel value="board">
          <div className="p-20">{boardNode}</div>
        </Tabs.Panel>
      </Tabs>
    </section>
  );
}
