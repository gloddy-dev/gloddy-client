'use client';
import EditProvider from './EditProvider.client';
import Step1 from './step1/Step1.client';
import Step2 from './step2/Step2.client';
import Step3 from './step3/Step3.client';
import { useGetProfile } from '@/apis/profile';
import { ModalProvider } from '@/hooks/useModal';
import { useState } from 'react';

export default function ProfileEdit() {
  const [step, setStep] = useState(1);
  const { data: defaultProfileData } = useGetProfile();

  return (
    <EditProvider
      defaultValues={{
        ...defaultProfileData,
        name: defaultProfileData.nickname,
        countryName: 'korea',
      }}
    >
      <ModalProvider>
        {step === 1 && <Step1 onPrev={() => setStep(2)} />}
        {step === 2 && <Step2 onPrev={() => setStep(1)} />}
      </ModalProvider>
    </EditProvider>
  );
}
