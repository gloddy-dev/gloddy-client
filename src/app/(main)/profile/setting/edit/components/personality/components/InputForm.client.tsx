'use client';

import { ProfileEditState } from '../../../type';
import { useEditContext } from '../../EditProvider.client';
import { useSignUpMutation } from '@/apis/auth';
import { useGetProfile } from '@/apis/profile';
import { Button, ButtonGroup } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { personalityList } from '@/constants/personalityList';
import { useDidMount } from '@/hooks/common/useDidMount';
import { PersonalityType } from '@/types';
import { useCallback } from 'react';

export default function InputForm() {
  const { handleSubmit, watch, setValue } = useEditContext();
  const { mutate: mutateSignUp } = useSignUpMutation();

  const {
    data: { personalities },
  } = useGetProfile();
  useDidMount(() => {
    setValue('personalities', personalities || []);
  });

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

  const onSubmit = async (data: ProfileEditState) => {
    // const { verifyEmailNumber, verifyNumber, birth, personalities, ...rest } = data;
    // const signUpRequest = {
    //   ...rest,
    //   birth: formatDateDTO(birth),
    //   personalities: personalities.map((id) => personalityList[id].keywordInEnglish),
    // };
    // mutateSignUp(signUpRequest);
  };

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
        {/* <Button disabled={watch('personalities').length < 3} type="submit"> */}
        <Button type="submit">완료</Button>
      </ButtonGroup>
    </form>
  );
}
