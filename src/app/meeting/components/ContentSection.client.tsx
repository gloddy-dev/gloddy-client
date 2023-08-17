'use client';
import { Tabs } from '@/components/Tabs';

export default function ContentSection() {
  return (
    <section>
      <Tabs>
        <Tabs.List isStretch={false}>
          <Tabs.Tab value="participating" text="참여중" />
          <Tabs.Tab value="waiting" text="대기중" />
          <Tabs.Tab value="evaluation" text="평가" />
        </Tabs.List>
        <Tabs.Panel value="participation">
          <div>참여중</div>
        </Tabs.Panel>
        <Tabs.Panel value="waiting">
          <div>대기중</div>
        </Tabs.Panel>
        <Tabs.Panel value="evaluation">
          <div>평가</div>
        </Tabs.Panel>
      </Tabs>
    </section>
  );
}
