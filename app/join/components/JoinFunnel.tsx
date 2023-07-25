'use client';

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
      <Funnel.Step name="step1">
        <Step1Page />
      </Funnel.Step>
    </Funnel>
  );
}
