'use client';

import { useEditContext } from '../EditProvider.client';
import { Button, ButtonGroup } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { personalityList } from '@/constants/personalityList';
import { PersonalityType } from '@/types';
import { useCallback } from 'react';

interface InputFormProps {
  onClose: () => void;
}

export default function Step2InputForm({ onClose }: InputFormProps) {
  const { watch, setValue } = useEditContext();

  const handleSelectedClick = useCallback(
    (personality: PersonalityType['keywordInEnglish']) => {
      const list = watch('personalities');
      if (list.includes(personality)) {
        setValue(
          'personalities',
          list.filter((it: string) => it !== personality)
        );
        return;
      }
      setValue('personalities', [...list, personality]);
    },
    [setValue, watch]
  );

  return (
    <form className="px-20">
      <section className="flex flex-wrap gap-12">
        {personalityList.map((tag) => (
          <Tag
            key={tag.id}
            id={tag.keywordInEnglish}
            isSelected={watch('personalities').includes(tag.keywordInEnglish)}
            onSelected={handleSelectedClick}
          >
            {tag.keyword}
          </Tag>
        ))}
      </section>
      <ButtonGroup>
        <Button disabled={watch('personalities').length < 3} type="button" onClick={onClose}>
          완료
        </Button>
      </ButtonGroup>
    </form>
  );
}
