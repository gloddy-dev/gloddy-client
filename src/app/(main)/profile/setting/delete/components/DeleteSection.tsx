'use client';
import DeleteHeader from './DeleteHeader';
import Step1 from './step1/Step1';
import Step2 from './step2/Step2';
import { useFunnel } from '@/hooks/useFunnel';
import { useRouter } from 'next/navigation';

export default function DeleteSection() {
  const { Funnel, nextStep, prevStep } = useFunnel(['1', '2']);
  const router = useRouter();
  return (
    <Funnel>
      <Funnel.Step name="1">
        <DeleteHeader onPrevClick={() => router.push('/profile/setting')} icon="close" />
        <Step1 onNextClick={nextStep} />
      </Funnel.Step>
      <Funnel.Step name="2">
        <DeleteHeader onPrevClick={prevStep} icon="arrow_back" />
        <Step2 />
      </Funnel.Step>
    </Funnel>
  );
}
