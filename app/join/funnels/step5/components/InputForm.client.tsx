'use client';

import PersonalitySection from './PersonalitySection.client';
import { useSignUpMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { SignUpState } from '@/app/join/type';
import { BottomFixedButton } from '@/components/common/Button';
import { personalityList } from '@/constants/personalityList';

const DUMMY_SIGN_UP_DATA = {
  phoneNumber: '010-5728-9353',
  imageUrl:
    'https://gloddy.s3.ap-northeast-2.amazonaws.com/file/87d8b6c4-fcda-4588-8334-b3ca96e635a0.png',
  schoolInfo: {
    school: '가천대학교',
    email: 'gueit214@gachon.ac.kr',
    certifiedStudent: true,
  },
  nickname: 'string',
  birth: '2023-07-22',
  gender: 'MAIL',
  personalities: ['OUTGOING'],
};

export default function InputForm() {
  const { handleSubmit, getValues } = useJoinContext();
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
      <BottomFixedButton
        text="완료"
        disabled={getValues().personalityIdList.length === 0}
        type="submit"
      />
    </form>
  );
}
