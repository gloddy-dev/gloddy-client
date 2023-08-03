import PersonalityItemServer from './PersonalityItem.server';
import { personalityList } from '@/constants/personalityList';
import { PersonalityType } from '@/types/profile';

export default function PersonalitySection() {
  return (
    <section className="flex flex-wrap gap-12">
      {personalityList.map((personality: PersonalityType) => {
        return <PersonalityItemServer key={personality.id} personality={personality} />;
      })}
    </section>
  );
}
