'use client';

import Step1Component from './step1/Step1Component.server';
import Step2Component from './step2/Step2Component.server';
import Step3Component from './step3/Step3Component.server';
import Step4Component from './step4/Step4Component.server';
import Step5Component from './step5/Step5Component.server';
import JoinTopNavigationBar from '../components/JoinTopNavigationBar.server';
import { SignUpRequest } from '@/apis/auth';
import { useFunnel } from '@/hooks/useFunnel';
import { createContext, useContext, useMemo } from 'react';

type FunnelContextType = {
  nextStep: () => void;
};

const FunnelContext = createContext<FunnelContextType>({ nextStep: () => {} });

export default function JoinFunnel() {
  const { Funnel, prevStep, nextStep } = useFunnel(['step1', 'step2', 'step3', 'step4', 'step5']);

  const handleSubmit = (data: SignUpRequest) => {
    console.log(data);
  };

  const contextValue = { nextStep };

  return (
    <FunnelContext.Provider value={contextValue}>
      <Funnel>
        <JoinTopNavigationBar onPrevClick={prevStep} />
        <Funnel.Step name="step1">
          <Step1Component />
        </Funnel.Step>
        <Funnel.Step name="step2">
          <Step2Component />
        </Funnel.Step>
        <Funnel.Step name="step3">
          <Step3Component />
        </Funnel.Step>
        <Funnel.Step name="step4">
          <Step4Component />
        </Funnel.Step>
        <Funnel.Step name="step5">
          <Step5Component />
        </Funnel.Step>
      </Funnel>
    </FunnelContext.Provider>
  );
}

const useFunnelContext = () => {
  const ctx = useContext(FunnelContext);
  if (!ctx)
    throw new Error(
      'Cannot find FunnelContext. It should be wrapped within FunnelContextProvider.'
    );
  return ctx;
};

export { useFunnelContext };
