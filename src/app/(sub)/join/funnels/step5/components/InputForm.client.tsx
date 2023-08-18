'use client';

import PersonalitySection from './PersonalitySection.client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { formatDate } from '../util';
import { useSignUpMutation } from '@/apis/auth';
import { BottomFixedButton } from '@/components/common/Button';
import { personalityList } from '@/constants/personalityList';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';

import type { SignUpState } from '../../../type';
import type { GenderType } from '@/types';

export default function InputForm() {
  const { handleSubmit, watch } = useJoinContext();
  const { mutate: mutateSignUp } = useSignUpMutation();
  const router = useRouter();

  const onSubmit = async (data: SignUpState) => {
    const { verifyEmailNumber, verifyNumber, birth, personalityIdList, gender, ...rest } = data;
    const signUpRequest = {
      ...rest,
      birth: formatDate(birth),
      personalities: personalityIdList.map((id) => personalityList[id - 1].keywordInEnglish),
      gender: (gender === '남성' ? 'MAIL' : 'FEMAIL') as GenderType,
    };
    // FIXME: gender타입 변환 필요x
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
