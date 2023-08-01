'use client';

import PersonalitySection from './PersonalitySection.client';
import { useSignUpMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { SignUpState } from '@/app/join/type';
import { BottomFixedButton } from '@/components/common/Button';
import { personalityList } from '@/constants/personalityList';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';

export default function InputForm() {
  const { handleSubmit, getValues } = useJoinContext();
  const { mutate: mutateSignUp } = useSignUpMutation();
  const router = useRouter();
  const { userLogin } = useUser();

  const onSubmit = async (data: SignUpState) => {
    const { certificateEmailNumber, certificateNumber, birth, personalityIdList, ...rest } = data;
    const signUpRequest = {
      ...rest,
      birth: `${birth.year}-${birth.month}-${birth.date}`,
      personalities: personalityIdList.map((id) => personalityList[id - 1].keywordInEnglish),
    };
    // FIXME: gender타입 변환 필요
    mutateSignUp(signUpRequest, {
      onSuccess: (data) => {
        const {
          token: { accessToken, refreshToken },
          userId,
        } = data;
        userLogin({ accessToken, refreshToken, userId });
        router.push('/grouping');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalitySection />
      <BottomFixedButton
        text="완료"
        disabled={getValues().personalityIdList.length === 0}
        type="submit"
      />
    </form>
  );
}
