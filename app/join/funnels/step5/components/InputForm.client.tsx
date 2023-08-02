'use client';

import PersonalitySection from './PersonalitySection.client';
import { useSignUpMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { SignUpState } from '@/app/join/type';
import { BottomFixedButton } from '@/components/common/Button';
import { personalityList } from '@/constants/personalityList';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';

export default function InputForm() {
  const { handleSubmit, watch } = useJoinContext();
  const { mutate: mutateSignUp } = useSignUpMutation();
  const router = useRouter();

  const onSubmit = async (data: SignUpState) => {
    const { verifyEmailNumber, verifyNumber, birth, personalityIdList, ...rest } = data;
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
        setTokenAtCookie({
          accessToken,
          refreshToken,
          userId,
        });
        router.push('/grouping');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalitySection />
      <BottomFixedButton
        text="완료"
        disabled={watch('personalityIdList').length === 0}
        type="submit"
      />
    </form>
  );
}
