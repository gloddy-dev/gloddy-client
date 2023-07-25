'use client';

import JoinTopNavigationBar from './JoinTopNavigationBar.server';
import Step1Component from './step1/Step1Component.server';
import Step1Page from '../step1/page';
import { SignUpRequest } from '@/apis/auth';
import { useFunnel } from '@/hooks/useFunnel';

export default function JoinFunnel() {
  const { Funnel, prevStep, nextStep } = useFunnel(['step1', 'step2', 'step3', 'step4', 'step5']);

  const handleSubmit = (data: SignUpRequest) => {
    console.log(data);
  };

  return (
    <Funnel>
      <JoinTopNavigationBar onPrevClick={prevStep} />
      <Funnel.Step name="step1">
        <Step1Component onNextClick={nextStep} />
      </Funnel.Step>
      {/* <Funnel.Step name="step2">
        <Step1Component />
      </Funnel.Step>
      <Funnel.Step name="step3">
        <Step1Component />
      </Funnel.Step>
      <Funnel.Step name="step4">
        <Step1Component />
      </Funnel.Step>
      <Funnel.Step name="step5">
        <Step1Component />
      </Funnel.Step> */}
    </Funnel>
  );
}
