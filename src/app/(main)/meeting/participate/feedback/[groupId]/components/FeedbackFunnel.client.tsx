'use client';

import FeedbackHeader from './FeedbackHeader';
import Step1 from '../funnels/step1/Step1';
import Step2 from '../funnels/step2/Step2';
import Step3 from '../funnels/step3/Step3';
import { useFunnel } from '@/hooks/useFunnel';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useRouter } from 'next/navigation';

export default function FeedbackSection() {
  const router = useRouter();

  const { Funnel, prevStep, nextStep } = useFunnel(['1', '2', '3']);
  const { groupId } = useNumberParams();
  // const { data } = useGetEstimate(groupId);
  // console.log(data);

  return (
    <Funnel>
      <Funnel.Step name="1">
        <FeedbackHeader message="모임 평가하기" />
        <Step1 onNextClick={nextStep} />
      </Funnel.Step>
      <Funnel.Step name="2">
        <FeedbackHeader message="최고의 짝꿍" onPrevClick={prevStep} />
        <Step2 onNextClick={nextStep} />
      </Funnel.Step>
      <Funnel.Step name="3">
        <FeedbackHeader message="최고의 짝꿍" onPrevClick={prevStep} />
        <Step3 />
      </Funnel.Step>
    </Funnel>
  );
}
