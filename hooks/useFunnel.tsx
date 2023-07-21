/* eslint-disable react/jsx-no-useless-fragment */
'use client';

import { useRouter } from 'next/navigation';
import { Children, isValidElement, useState } from 'react';

type NonEmptyArray<T> = [T, ...T[]];

interface FunnelProps {
  children: React.ReactNode;
}

interface StepProps<Steps extends NonEmptyArray<string>> {
  name: Steps[number];
  children: React.ReactNode;
}

export function useFunnel<Steps extends NonEmptyArray<string>>(
  steps: Steps,
  initialStep?: Steps[number]
) {
  const [step, setStep] = useState<Steps[number]>(initialStep ?? steps[0]);
  const router = useRouter();

  const nextStep = () => {
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
      window.history.pushState(null, '');
    }
  };

  const prevStep = () => {
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }

    router.back();
  };

  const Funnel = ({ children }: FunnelProps) => {
    const childrenArray = Children.toArray(children).filter(isValidElement);

    childrenArray.forEach((child) => {
      if (!steps.includes((child.props as StepProps<Steps>).name)) {
        throw new Error('스텝 이름이 잘못되었습니다.');
      }
    });

    return <>{children}</>;
  };

  const Step = ({ name, children }: StepProps<Steps>) => {
    return step === name ? <>{children}</> : null;
  };

  Funnel.Step = Step;

  return { currentStep: step, Funnel, nextStep, prevStep } as const;
}
