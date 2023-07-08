'use client';
import { useState } from 'react';

import Button from '@/components/common/Button';
import PersonalityItem from '@/components/join/PersonalityItem';
import { personalityList } from '@/constants/personalityList';

export default function InputForm() {
  const [selectedPersonalityList, setSelectedPersonalityList] = useState<number[]>([]);

  const handlePersonalityClick = (index: number) => {
    if (selectedPersonalityList.includes(index)) {
      setSelectedPersonalityList(selectedPersonalityList.filter((item) => item !== index));
    } else {
      setSelectedPersonalityList([...selectedPersonalityList, index]);
    }
  };
  return (
    <div>
      <section className="flex flex-wrap gap-12">
        {personalityList.map((personality, index: number) => (
          <PersonalityItem
            key={personality.id}
            personality={personality}
            isSelected={selectedPersonalityList.includes(index)}
            onClick={() => {
              handlePersonalityClick(index);
            }}
          />
        ))}
      </section>

      <section className="absolute bottom-0 w-full">
        <Button text="완료" disabled={selectedPersonalityList.length === 0} href="/login" />
      </section>
    </div>
  );
}
