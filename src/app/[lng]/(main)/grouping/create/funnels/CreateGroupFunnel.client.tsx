'use client';

import MainStep from './main/MainStep.client';
import MeetDateStep from './meetDate/MeetDateStep.client';
import CreateHeader from '../components/CreateHeader.client';
import { useFunnel } from '@/hooks/useFunnel';

export default function CreateFunnel() {
  const { Funnel, currentStep, setStep, prevStep } = useFunnel(['main', 'meetDate']);

  return (
    <Funnel>
      <CreateHeader currentStep={currentStep} />
      <Funnel.Step name="main">
        <MainStep onSelectMeetDate={() => setStep('meetDate')} />
      </Funnel.Step>
      <Funnel.Step name="meetDate">
        <MeetDateStep onDone={prevStep} />
      </Funnel.Step>
    </Funnel>
  );
}
