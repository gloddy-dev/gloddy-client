'use client';
import FeedbackContent from './FeedbackContent.client';
import ParticipatingContent from './ParticipatingContent.client';
import WaitingContent from './WaitingContent.client';
import { useTranslation } from '@/app/i18n/client';
import { Tabs } from '@/components/Tabs';

export default function ContentSection() {
  const { t } = useTranslation('meeting');

  return (
    <Tabs>
      <Tabs.List isStretch={false}>
        <Tabs.Tab value="participating" text={t('home.participating')} />
        <Tabs.Tab value="waiting" text={t('home.waiting')} />
        <Tabs.Tab value="feedback" text={t('home.evaluation')} />
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
