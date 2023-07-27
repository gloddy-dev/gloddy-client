'use client';

import PersonalitySection from './PersonalitySection.client';
import SubmitSection from './SubmitSection.client';
import { useSignUpMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { SignUpState } from '@/app/join/type';
import { personalityList } from '@/constants/personalityList';

export default function InputForm() {
  const { handleSubmit } = useJoinContext();
  const { mutate: mutateSignUp } = useSignUpMutation();
  const onSubmit = async (data: SignUpState) => {
    const { certificateEmailNumber, certificateNumber, birth, gender, personalityIdList, ...rest } =
      data;
    const signUpRequest = {
      ...rest,
      birth: `${birth.year}-${birth.month}-${birth.date}`,
      gender: gender === '남성' ? 'MALE' : 'FEMALE',
      personalities: personalityIdList.map((id) => personalityList[id - 1].keywordInEnglish),
    };
    // mutateSignUp(signUpRequest);
    // router.push('/grouping');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalitySection />
      <SubmitSection />
    </form>
  );
}
