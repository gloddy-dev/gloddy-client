'use client';

import PersonalityItem from '../../components/PersonalityItem.server';
import { BottomFixedButton, Button } from '@/components/common/Button';
import { personalityList } from '@/constants/personalityList';
import useJoinStore from '@/store/useJoinStore';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

export default function InputForm() {
  const router = useRouter();

  const [selectedPersonalityList, setSelectedPersonalityList] = useState<number[]>([]);

  const handlePersonalityClick = React.useCallback((id: number) => {
    setSelectedPersonalityList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  }, []);

  const { phoneNumber, school, email, name, birth, gender } = useJoinStore();

  const handleSubmit = () => {
    console.log(phoneNumber, school, email, name, birth, gender, selectedPersonalityList);
    router.push('/grouping');
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
