'use client';
import { useJoinContext } from '../../JoinContext';
import { useEmailMutation } from '@/apis/auth';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import useModalStore from '@/store/useModalStore';
import clsx from 'clsx';
import Image from 'next/image';
import { memo } from 'react';

export default memo(function EmailForm() {
  const { openModal, modalName } = useModalStore();
  const { mutate: mutateEmail } = useEmailMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useJoinContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label="ID"
          register={register('schoolInfo.email', {
            required: true,
            pattern: regexr.email,
          })}
        />
      </div>

      <div
        className={clsx('font-500 flex justify-center text-13 text-orange', {
          invisible: !errors.schoolInfo?.email,
        })}
      >
        <Image alt="alert" src="/assets/alert.svg" width={10} height={30} />
        <Spacing size={5} direction="horizontal" />
        <span>학교 이메일을 다시 확인해주세요.</span>
      </div>

      <Spacing size={10} />
    </form>
  );
});
