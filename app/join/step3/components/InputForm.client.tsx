'use client';

import CertificationSection from './CertificationSection';
import EmailSection from './EmailSection';
import { useTimer } from '@/hooks/useTimer';
import { useForm } from 'react-hook-form';

import type { Step3InputType } from '../type';

export default function InputForm() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<Step3InputType>();

  const { status, time, start } = useTimer({
    initialTime: 180,
    timerType: 'DECREMENTAL',
    endTime: 0,
  });

  return (
    <div>
      <EmailSection
        register={register}
        handleSubmit={handleSubmit}
        email={watch('email')}
        isError={!!errors.email}
        timerStart={start}
        timerStatus={status}
      />

      <CertificationSection
        register={register}
        handleSubmit={handleSubmit}
        certificateNumber={watch('certificateNumber')}
        timerTime={time}
      />
    </div>
  );
}
