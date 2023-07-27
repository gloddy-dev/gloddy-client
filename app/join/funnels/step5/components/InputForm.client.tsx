'use client';

import PersonalityItem from './PersonalityItem.server';
import SubmitSection from './SubmitSection.client';
import { PersonalityType } from '../type';
import { personalityList } from '@/constants/personalityList';

export default function InputForm() {
  return (
    <form>
      <section className="flex flex-wrap gap-12">
        {personalityList.map((personality: PersonalityType) => {
          return <PersonalityItem key={personality.id} personality={personality} />;
        })}
      </section>
      <SubmitSection />
    </form>
  );
}
