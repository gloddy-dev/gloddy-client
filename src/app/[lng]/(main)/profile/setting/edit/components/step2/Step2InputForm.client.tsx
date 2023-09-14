import { useEditContext } from '../EditProvider.client';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { personalityList } from '@/constants/personalityList';
import { PersonalityType } from '@/types';
import { useCallback } from 'react';

interface InputFormProps {
  onPrevClick: () => void;
}

export default function Step2InputForm({ onPrevClick }: InputFormProps) {
  const { watch, setValue } = useEditContext();
  const { t } = useTranslation('profile');

  const handleSelectedClick = useCallback(
    (personality: PersonalityType['keywordDTO']) => {
      const list = watch('personalities');
      if (list.includes(personality)) {
        setValue(
          'personalities',
          list.filter((it: string) => it !== personality)
        );
        return;
      }
      if (list.length === 3) return;
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
            id={tag.keywordDTO}
            isSelected={watch('personalities').includes(tag.keywordDTO)}
            onSelected={handleSelectedClick}
          >
            {t('keyword.' + tag.keyword)}
          </Tag>
        ))}
      </section>
      <ButtonGroup>
        <Button disabled={watch('personalities').length !== 3} type="button" onClick={onPrevClick}>
          완료
        </Button>
      </ButtonGroup>
    </form>
  );
}
