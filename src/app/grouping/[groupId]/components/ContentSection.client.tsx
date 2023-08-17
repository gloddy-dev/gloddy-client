'use client';
import { Tabs } from '@/components/Tabs';

interface ContentSectionProps {
  detailNode: React.ReactNode;
  boardNode: React.ReactNode;
}

export default function ContentSection({ detailNode, boardNode }: ContentSectionProps) {
  return (
    <section>
      <Tabs>
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
