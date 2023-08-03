import { ProfileResponse } from '@/apis/profile';
import { Spacing } from '@/components/common/Spacing';
import { personalityList } from '@/constants/personalityList';

import type { PersonalityType } from '@/types/profile';

interface IntroductionSectionProps {
  profileData: ProfileResponse;
}
export default function IntroductionSection({ profileData }: IntroductionSectionProps) {
  const { introduce, personalities } = profileData;
  return (
    <section className="px-20">
      <Spacing size={20} />
      <article>
        <p className="text-12 leading-36">자기소개</p>
        <div className="rounded-10 bg-white px-20 py-15 text-12">{introduce}</div>
      </article>
      <Spacing size={20} />
      <article>
        <p className="text-12 leading-36">성격</p>
        <Spacing size={5} />
        <div>
          {personalities.map((personlity: PersonalityType['keywordInEnglish']) => (
            <span key={personlity} className="rounded-20 bg-white px-14 py-10 text-12">
              {
                personalityList.find((it: PersonalityType) => it.keywordInEnglish === personlity)
                  ?.keyword
              }
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
