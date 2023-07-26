'use client';

import PersonalityItem from './PersonalityItem.server';
import { PersonalityType } from '../type';
import { personalityList } from '@/constants/personalityList';

export default function FormSection() {
  return (
    <section>
      <form className="flex flex-wrap gap-12">
        {personalityList.map((personality: PersonalityType) => {
          return <PersonalityItem key={personality.id} personality={personality} />;
        })}
      </form>
    </section>
  );
}
