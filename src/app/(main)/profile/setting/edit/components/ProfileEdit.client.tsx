'use client';
import EditProvider from './EditProvider.client';
import Step2 from './personality/Step2.client';
import Step1 from './Step1.client';
import { useGetProfile } from '@/apis/profile';
import { useState } from 'react';

export default function ProfileEdit() {
  const [step, setStep] = useState(1);
  const { data: defaultProfileData } = useGetProfile();

  return (
    <EditProvider defaultValues={defaultProfileData}>
      {step === 1 && <Step1 onNext={() => setStep(2)} />}
      {step === 2 && <Step2 onPrev={() => setStep(1)} />}
    </EditProvider>
  );
}
