'use client';
import { useState } from 'react';

import Button from '@/components/common/Button';
import PersonalityItem from '@/components/join/PersonalityItem';
import { personalityList } from '@/constants/personalityList';
import useJoin from '@/store/useJoin';

export default function InputForm() {
  const [selectedPersonalityList, setSelectedPersonalityList] = useState<number[]>([]);

  const handlePersonalityClick = (id: number) => {
    if (selectedPersonalityList.includes(id)) {
      setSelectedPersonalityList((prev) => prev.filter((item) => item !== id));
      return;
    }
    setSelectedPersonalityList([...selectedPersonalityList, id]);
  };

  const { phoneNumber, school, email, name, birth, gender } = useJoin();

  const handleSubmit = () => {
    console.log(phoneNumber, school, email, name, birth, gender, selectedPersonalityList);
  };

  return (
    <div>
      <section className="flex flex-wrap gap-12">
        {personalityList.map((personality) => (
          <PersonalityItem
            key={personality.id}
            personality={personality}
            isSelected={selectedPersonalityList.includes(+personality.id)}
            onClick={() => {
              handlePersonalityClick(+personality.id);
            }}
          />
        ))}
      </section>

      <section className="absolute bottom-0 w-full">
        <Button
          text="완료"
          disabled={selectedPersonalityList.length === 0}
          onClick={handleSubmit}
        />
      </section>
    </div>
  );
}
