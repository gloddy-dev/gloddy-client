'use client';

import PersonalityItem from '../../components/PersonalityItem.server';
import { postSignUp, useSignUpMutation } from '@/apis/auth';
import { BottomFixedButton, Button } from '@/components/common/Button';
import { personalityList } from '@/constants/personalityList';
import useJoinStore from '@/store/useJoinStore';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

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

export default function InputForm() {
  const router = useRouter();

  const { mutate: mutateSignUp } = useSignUpMutation();

  const [selectedPersonalityList, setSelectedPersonalityList] = useState<number[]>([]);

  const handlePersonalityClick = (id: number) => {
    setSelectedPersonalityList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const { phoneNumber, school, email, name, birth, gender } = useJoinStore();

  const handleSubmit = async () => {
    console.log(phoneNumber, school, email, name, birth, gender, selectedPersonalityList);

    mutateSignUp(DUMMY_SIGN_UP_DATA);
    // router.push('/grouping');
  };

  return (
    <div>
      {/* TODO : Compound Component Pattern으로 구현할 예정 (규성) */}
      <section className="flex flex-wrap gap-12">
        {personalityList.map((personality) => {
          return (
            <PersonalityItem
              key={personality.id}
              personality={personality}
              isSelected={selectedPersonalityList.includes(+personality.id)}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              onClick={useCallback(() => handlePersonalityClick(+personality.id), [personality.id])}
            />
          );
        })}
      </section>

      <BottomFixedButton
        text="완료"
        disabled={selectedPersonalityList.length === 0}
        onClick={handleSubmit}
      />
    </div>
  );
}
