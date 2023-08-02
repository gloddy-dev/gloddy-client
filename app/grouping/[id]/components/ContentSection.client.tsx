'use client';
import { BottomFixedButton } from '@/components/common/Button';
import Tabs from '@/components/common/Tabs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type { TabType } from '../type';

interface ContentSectionProps {
  detailNode: React.ReactNode;
  boardNode: React.ReactNode;
}

export default function ContentSection({ detailNode, boardNode }: ContentSectionProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
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
          {/* {! && (
            <BottomFixedButton text="지원하기" onClick={() => router.push(`${pathname}/apply`)} />
          )} */}
        </Tabs.Panel>
        <Tabs.Panel value="board">
          <div className="p-20">{boardNode}</div>
          {/* <BottomFixedButton text="글쓰기" onClick={() => router.push(`${pathname}/write`)} /> */}
        </Tabs.Panel>
      </Tabs>
    </section>
  );
}
