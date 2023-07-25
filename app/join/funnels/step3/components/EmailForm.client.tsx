'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import clsx from 'clsx';
import Image from 'next/image';
import { memo } from 'react';

export default memo(function EmailForm() {
  const {
    register,
    formState: { errors },
  } = useJoinContext();

  return (
    <form>
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
