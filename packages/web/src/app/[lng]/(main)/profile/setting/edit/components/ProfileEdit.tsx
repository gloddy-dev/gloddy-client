'use client';
import { useState } from 'react';

import EditProvider from './EditProvider';
import Step1 from './step1/Step1';
import Step2 from './step2/Step2';

import { useGetProfile } from '@/apis/profile';
import { ModalProvider } from '@/hooks/useModal';

export default function ProfileEdit() {
  const [step, setStep] = useState(1);
  const { data: defaultProfileData } = useGetProfile();

  return (
    <EditProvider
      defaultValues={{
        ...defaultProfileData,
        name: defaultProfileData.nickname,
        countryName: defaultProfileData.countryName,
      }}
    >
      <ModalProvider>
        {step === 1 && <Step1 onPrev={() => setStep(2)} />}
        {step === 2 && <Step2 onPrev={() => setStep(1)} />}
      </ModalProvider>
    </EditProvider>
  );
}
