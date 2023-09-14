'use client';

import { useJoinContext } from '../../../components/JoinContext.client';
import { useSignUpMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { personalityList } from '@/constants/personalityList';
import { formatDateDTO } from '@/utils/formatDateDTO';
import { useCallback } from 'react';

import type { SignUpState } from '../../../type';

export default function InputForm() {
  const { handleSubmit, watch } = useJoinContext();
  const { mutate: mutateSignUp } = useSignUpMutation();

  const onSubmit = async (data: SignUpState) => {
    const { verifyEmailNumber, verifyNumber, birth, personalityIdList, ...rest } = data;
    const signUpRequest = {
      ...rest,
      birth: formatDateDTO(birth),
      personalities: personalityIdList.map((id) => personalityList[id].keywordDTO),
    };
    mutateSignUp(signUpRequest);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalitySection />
      <ButtonGroup>
        <Button disabled={watch('personalityIdList').length !== 3} type="submit">
          완료
        </Button>
      </ButtonGroup>
    </form>
  );
}

function PersonalitySection() {
  const { watch, setValue } = useJoinContext();

  const handleSelectedClick = useCallback(
    (id: number) => {
      const list = watch('personalityIdList');
      if (list.includes(id)) {
        setValue(
          'personalityIdList',
          list.filter((personalityId: number) => personalityId !== id)
        );
        return;
      }
      if (list.length === 3) return;
      setValue('personalityIdList', [...list, id]);
    },
    [setValue, watch]
  );

  return (
    <section className="flex flex-wrap gap-12">
      {personalityList.map((tag) => (
        <Tag
          key={tag.id}
          id={tag.id}
          isSelected={watch('personalityIdList').includes(tag.id)}
          onSelected={handleSelectedClick}
        >
          {tag.keyword}
        </Tag>
      ))}
    </section>
  );
}
