'use client';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useGetEstimate } from '@/apis/groups';
import { useFunnel } from '@/hooks/useFunnel';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function PraiseSection() {
  const { Funnel, prevStep, nextStep } = useFunnel(['1', '2', '3']);
  const { groupId } = useNumberParams();
  // const { data } = useGetEstimate(groupId);
  // console.log(data);

  return (
    <Funnel>
      <Funnel.Step name="1">
        <Step1 onNextClick={nextStep} />
      </Funnel.Step>
      <Funnel.Step name="2">
        <Step2 onPrevClick={prevStep} onNextClick={nextStep} />
      </Funnel.Step>
      <Funnel.Step name="3">
        <Step3 onPrevClick={prevStep} onNextClick={nextStep} />
      </Funnel.Step>
    </Funnel>
  );
}
