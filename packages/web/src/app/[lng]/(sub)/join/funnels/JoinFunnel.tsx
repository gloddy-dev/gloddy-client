'use client';

import { createContext, useContext } from 'react';

import Step1Component from './step1/Step1Component';
import Step2Component from './step2/Step2Component';
import Step3Component from './step3/Step3Component';
import Step4Component from './step4/Step4Component';
import Step5Component from './step5/Step5Component';
import JoinHeader from '../components/JoinHeader';

import { useFunnel } from '@/hooks/useFunnel';

interface FunnelContextProps extends Pick<ReturnType<typeof useFunnel>, 'nextStep'> {}

const FunnelContext = createContext<FunnelContextProps | null>(null);

export default function JoinFunnel() {
  const { Funnel, prevStep, nextStep, currentStep } = useFunnel(['1', '2', '3', '4', '5']);

  return (
    <FunnelContext.Provider value={{ nextStep }}>
      <Funnel>
        <JoinHeader onPrevClick={prevStep} isBack={currentStep === '5'} />
        <Funnel.Step name="1">
          <Step1Component />
        </Funnel.Step>
        <Funnel.Step name="2">
          <Step2Component />
        </Funnel.Step>
        <Funnel.Step name="3">
          <Step3Component />
        </Funnel.Step>
        <Funnel.Step name="4">
          <Step4Component />
        </Funnel.Step>
        <Funnel.Step name="5">
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
