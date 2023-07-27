'use client';

import PersonalitySection from './PersonalitySection.client';
import SubmitSection from './SubmitSection.client';
import { useSignUpMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { SignUpStateType } from '@/app/join/type';

export default function InputForm() {
  const { handleSubmit } = useJoinContext();
  const { mutate: mutateSignUp } = useSignUpMutation();
  const onSubmit = async (data: Pick<SignUpStateType, 'personalityIdList'>) => {
    // mutateSignUp(DUMMY_SIGN_UP_DATA);
    // router.push('/grouping');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalitySection />
      <SubmitSection />
    </form>
  );
}
