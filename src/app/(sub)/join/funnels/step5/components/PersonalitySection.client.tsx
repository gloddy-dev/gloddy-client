'use client';

import PersonalityItemServer from './PersonalityItem.client';
import { personalityList } from '@/constants/personalityList';

import type { PersonalityType } from '@/types';

export default function PersonalitySection() {
  return (
    <section className="flex flex-wrap gap-12">
      {personalityList.map((personality: PersonalityType) => {
        return <PersonalityItemServer key={personality.id} personality={personality} />;
      })}
    </section>
  );
}
