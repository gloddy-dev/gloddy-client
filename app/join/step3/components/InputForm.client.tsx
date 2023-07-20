'use client';

import CertificationSection from './CertificationSection';
import EmailSection from './EmailSection';
import { useForm } from 'react-hook-form';

import type { Step3InputType } from '../type';

export default function InputForm() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<Step3InputType>();

  return (
    <div>
      <EmailSection
        register={register}
        handleSubmit={handleSubmit}
        email={watch('email')}
        isError={!!errors.email}
      />

      <CertificationSection
        register={register}
        handleSubmit={handleSubmit}
        certificateNumber={watch('certificateNumber')}
      />
    </div>
  );
}
