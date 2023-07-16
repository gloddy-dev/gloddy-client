'use client';

import CertificationSection from './CertificationSection';
import EmailSection from './EmailSection';
import { InputType } from '../type';
import { useModals } from '@/hooks/useModals';
import useJoinStore from '@/store/useJoinStore';
import { useForm } from 'react-hook-form';

export default function InputForm() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<InputType>();

  const { isModalOpen, openModal, closeModal } = useModals<'certification'>();
  const { setJoinValue } = useJoinStore();

  return (
    <div>
      <EmailSection
        openModal={openModal}
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
