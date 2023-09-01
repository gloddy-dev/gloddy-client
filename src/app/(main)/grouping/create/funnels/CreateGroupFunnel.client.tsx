'use client';

import MainStep from './main/MainStep.client';
import MeetDateStep from './meetDate/MeetDateStep.client';
import CreateHeader from '../components/CreateHeader.client';
import { useFunnel } from '@/hooks/useFunnel';
import { SubmitHandler } from 'react-hook-form';

import type { CreateGroupContextValue } from '../type';

export default function CreateFunnel() {
  const { Funnel, currentStep, setStep, prevStep } = useFunnel(['main', 'meetDate']);

  const handleSubmit: SubmitHandler<CreateGroupContextValue> = (data) => {
    console.log(data);
  };

  return (
    <Funnel>
      <CreateHeader currentStep={currentStep} />
      <Funnel.Step name="main">
        <MainStep onSelectMeetDate={() => setStep('meetDate')} onSubmit={handleSubmit} />
      </Funnel.Step>
      <Funnel.Step name="meetDate">
        <MeetDateStep onDone={prevStep} />
      </Funnel.Step>
    </Funnel>
  );
}
