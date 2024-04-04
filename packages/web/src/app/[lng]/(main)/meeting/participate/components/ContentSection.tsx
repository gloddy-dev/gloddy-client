'use client';

import { Suspense } from 'react';

import FeedbackContent from './FeedbackContent';
import ParticipatingContent from './ParticipatingContent';
import WaitingContent from './WaitingContent';

import { useTranslation } from '@/app/i18n/client';
import { Loading } from '@/components/Loading';
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
        <Suspense fallback={<Loading />}>
          <ParticipatingContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="waiting">
        <Suspense fallback={<Loading />}>
          <WaitingContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="feedback">
        <Suspense fallback={<Loading />}>
          <FeedbackContent />
        </Suspense>
      </Tabs.Panel>
    </Tabs>
  );
}
