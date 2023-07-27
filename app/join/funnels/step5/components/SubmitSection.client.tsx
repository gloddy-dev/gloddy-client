'use client';

import { useSignUpMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { BottomFixedButton } from '@/components/common/Button';
import { useRouter } from 'next/navigation';

// Test용 Dummy Data
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

export default function SubmitSection() {
  const { getValues } = useJoinContext();

  return (
    <BottomFixedButton
      text="완료"
      disabled={getValues().personalityIdList.length === 0}
      type="submit"
    />
  );
}
