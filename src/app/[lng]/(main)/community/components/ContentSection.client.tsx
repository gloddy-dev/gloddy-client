'use client';

import { Tabs } from '@/components/Tabs';

export default function ContentSection() {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab text="전체" value="all" />
        <Tabs.Tab text="일상 톡톡" value="daily" />
        <Tabs.Tab text="궁금해요" value="question" />
        <Tabs.Tab text="언어 교환" value="language" />
      </Tabs.List>
      <Tabs.Panel value="all">
        <p>전체</p>
      </Tabs.Panel>
      <Tabs.Panel value="daily">
        <p>일상 톡톡</p>
      </Tabs.Panel>
      <Tabs.Panel value="question">
        <p>궁금해요</p>
      </Tabs.Panel>
      <Tabs.Panel value="language">
        <p>언어 교환</p>
      </Tabs.Panel>
    </Tabs>
  );
}
