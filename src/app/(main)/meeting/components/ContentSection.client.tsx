'use client';
import EvaluationContent from './EvaluationContent.client';
import ParticipatingContent from './ParticipatingContent.client';
import WaitingContent from './WaitingContent.client';
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
        <Tabs.Panel value="participating">
          <ParticipatingContent />
        </Tabs.Panel>
        <Tabs.Panel value="waiting">
          <WaitingContent />
        </Tabs.Panel>
        <Tabs.Panel value="evaluation">
          <EvaluationContent />
        </Tabs.Panel>
      </Tabs>
    </section>
  );
}
