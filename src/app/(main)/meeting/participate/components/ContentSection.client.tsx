'use client';
import FeedbackContent from './FeedbackContent.client';
import ParticipatingContent from './ParticipatingContent.client';
import WaitingContent from './WaitingContent.client';
import { Tabs } from '@/components/Tabs';

export default function ContentTabs() {
  return (
    <Tabs>
      <Tabs.List isStretch={false}>
        <Tabs.Tab value="participating" text="참여중" />
        <Tabs.Tab value="waiting" text="대기중" />
        <Tabs.Tab value="feedback" text="평가" />
      </Tabs.List>
      <Tabs.Panel value="participating">
        <ParticipatingContent />
      </Tabs.Panel>
      <Tabs.Panel value="waiting">
        <WaitingContent />
      </Tabs.Panel>
      <Tabs.Panel value="feedback">
        <FeedbackContent />
      </Tabs.Panel>
    </Tabs>
  );
}
