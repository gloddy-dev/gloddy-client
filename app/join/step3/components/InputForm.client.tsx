'use client';

import { useForm } from 'react-hook-form';

import { useModal } from '@/hooks/useModal';
import useJoin from '@/store/useJoin';
import { InputType } from '../type';
import CertificationSection from './CertificationSection';
import EmailSection from './EmailSection';

export default function InputForm() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<InputType>();

  const { isModalOpen, openModal, closeModal } = useModal<'certification'>();
  const { setJoinValue } = useJoin();

  return (
    <div>
      <EmailSection
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        register={register}
        handleSubmit={handleSubmit}
        setJoinValue={setJoinValue}
        email={watch('email')}
        isError={!!errors.email}
      />

      <CertificationSection
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        register={register}
        handleSubmit={handleSubmit}
        certificateNumber={watch('certificateNumber')}
      />
    </div>
  );
}
