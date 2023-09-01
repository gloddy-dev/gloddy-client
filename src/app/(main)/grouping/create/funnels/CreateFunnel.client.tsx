'use client';

import MainComponent from './main/MainForm.client';
import MeetDateComponent from './meetDate/MeetDateForm.client';
import { useCreateGroupContext } from '../components/CreateGroupContext';
import CreateHeader from '../components/CreateHeader.client';
import { useFunnel } from '@/hooks/useFunnel';
import { SubmitHandler } from 'react-hook-form';

import type { CreateGroupContextValue } from '../type';

export default function CreateFunnel() {
  const { handleSubmit } = useCreateGroupContext();
  const { Funnel, currentStep, setStep, prevStep } = useFunnel(['main', 'meetDate']);

  const onSubmit: SubmitHandler<CreateGroupContextValue> = (data) => {
    console.log(data);
  };

  return (
    <Funnel>
      <CreateHeader currentStep={currentStep} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Funnel.Step name="main">
          <MainComponent onSelectMeetDate={() => setStep('meetDate')} />
        </Funnel.Step>
        <Funnel.Step name="meetDate">
          <MeetDateComponent onDone={prevStep} />
        </Funnel.Step>
      </form>
    </Funnel>
  );
}
