'use client';

import MainStep from './main/MainStep.client';
import MeetDateStep from './meetDate/MeetDateStep.client';
import CreateHeader from '../components/CreateHeader.client';
import { PageAnimation } from '@/components/PageAnimation';
import { useFunnel } from '@/hooks/useFunnel';

export default function CreateFunnel() {
  const { Funnel, currentStep, setStep, prevStep } = useFunnel(['main', 'meetDate']);

  return (
    <Funnel>
      <CreateHeader currentStep={currentStep} />
      <Funnel.Step name="main">
        <PageAnimation>
          <MainStep onSelectMeetDate={() => setStep('meetDate')} />
        </PageAnimation>
      </Funnel.Step>
      <Funnel.Step name="meetDate">
        <PageAnimation>
          <MeetDateStep onDone={prevStep} />
        </PageAnimation>
      </Funnel.Step>
    </Funnel>
  );
}
