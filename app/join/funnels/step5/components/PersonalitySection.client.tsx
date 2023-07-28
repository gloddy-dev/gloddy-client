import PersonalityItemServer from './PersonalityItem.server';
import { PersonalityType } from '../type';
import { personalityList } from '@/constants/personalityList';

export default function PersonalitySection() {
  return (
    <section className="flex flex-wrap gap-12">
      {personalityList.map((personality: PersonalityType) => {
        return <PersonalityItemServer key={personality.id} personality={personality} />;
      })}
    </section>
  );
}
