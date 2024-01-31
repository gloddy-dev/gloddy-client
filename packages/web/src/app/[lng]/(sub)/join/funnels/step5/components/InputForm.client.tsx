'use client';

import { useCallback } from 'react';

import { useJoinContext } from '../../../components/JoinContext.client';
import { useSignUpMutation } from '@/apis/auth';
import CertificateSkipModal from '@/app/[lng]/(sub)/join/funnels/step5/components/CertificateSkipModal';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { LayerLoading } from '@/components/Loading';
import { Tag } from '@/components/Tag';
import { personalityList } from '@/constants/personalityList';
import { useModal } from '@/hooks/useModal';
import { formatDateDTO } from '@/utils/formatDateDTO';

import type { SignUpState } from '../../../type';

export default function InputForm() {
  const { t } = useTranslation('join');

  const { open: openSkipModal, exit: exitSkipModal } = useModal();

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

  const handleSkipClick = () => {
    openSkipModal(() => (
      <CertificateSkipModal onOkClick={handleSubmit(onSubmit)} onCancelClick={exitSkipModal} />
    ));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalitySection />
      <ButtonGroup isSpacing={false}>
        <Button type="button" onClick={handleSkipClick}>
          {t('건너뛰기')}
        </Button>
        <Button disabled={watch('personalityIdList').length !== 3} type="submit">
          {t('complete')}
        </Button>
      </ButtonGroup>
      <LayerLoading isPending={status === 'pending' || status === 'success'} />
    </form>
  );
}

function PersonalitySection() {
  const { t } = useTranslation('join');
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
          {t(tag.keyword)}
        </Tag>
      ))}
    </section>
  );
}
