'use client';

import { useJoinContext } from '../../../components/JoinContext.client';
import { useSignUpMutation } from '@/apis/auth';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { LayerLoading } from '@/components/Loading';
import { Tag } from '@/components/Tag';
import { personalityList } from '@/constants/personalityList';
import { formatDateDTO } from '@/utils/formatDateDTO';
import { useCallback } from 'react';

import type { SignUpState } from '../../../type';

export default function InputForm() {
  const { t } = useTranslation('join');

  const { handleSubmit, watch } = useJoinContext();
  const { mutate: mutateSignUp, status } = useSignUpMutation();

  const onSubmit = async (data: SignUpState) => {
    const { verifyEmailNumber, verifyNumber, birth, personalityIdList, ...rest } = data;
    const signUpRequest = {
      ...rest,
      birth: formatDateDTO(birth),
      personalities: personalityIdList.map((id) => personalityList[id]?.keywordDTO),
    };
    mutateSignUp(signUpRequest);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalitySection />
      <ButtonGroup>
        <Button disabled={watch('personalityIdList').length !== 3} type="submit">
          {t('complete')}
        </Button>
      </ButtonGroup>
      <LayerLoading isLoading={status === 'loading' || status === 'success'} />
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
          {tag.emoji + ' '}
          {tag.keyword}
        </Tag>
      ))}
    </section>
  );
}
