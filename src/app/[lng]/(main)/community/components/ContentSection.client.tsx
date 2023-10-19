'use client';

import AllContent from './AllContent.client';
import DailyContent from './DailyContent.client';
import LanguageContent from './LanguageContent.client';
import QuestionContent from './QuestionContent.client';
import { Tabs } from '@/components/Tabs';
import { Suspense } from 'react';

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
        <Suspense>
          <AllContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="daily">
        <Suspense>
          <DailyContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="question">
        <Suspense>
          <QuestionContent />
        </Suspense>
      </Tabs.Panel>
      <Tabs.Panel value="language">
        <Suspense>
          <LanguageContent />
        </Suspense>
      </Tabs.Panel>
    </Tabs>
  );
}
