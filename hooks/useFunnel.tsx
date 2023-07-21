/* eslint-disable react/jsx-no-useless-fragment */
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Children, isValidElement, useEffect, useState } from 'react';

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
  options?: { initialStep?: Steps[number]; stepQueryKey?: string }
) {
  const initialStep = options?.initialStep ?? steps[0];
  const queryKey = options?.stepQueryKey ?? 'step';
  const [step, setStep] = useState<Steps[number]>(initialStep);
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextStep = () => {
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
      window.history.pushState(
        null,
        '',
        `${window.location.pathname}?${queryKey}=${steps[currentIndex + 1]}`
      );
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
    const childrenArray = Children.toArray(children)
      .filter(isValidElement)
      .filter((child) => {
        return (child.props as StepProps<Steps>).name !== undefined;
      });

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

  window.addEventListener('popstate', () => {
    const currentStep = searchParams.get(queryKey) as Steps[number];
    console.log('pop', currentStep);
    if (currentStep) {
      setStep(currentStep);
    }
  });

  window.addEventListener('pushstate', () => {
    const currentStep = searchParams.get(queryKey) as Steps[number];
    console.log('push', currentStep);
  });

  useEffect(() => {
    const currentStep = searchParams.get(queryKey) as Steps[number];
    if (!currentStep) {
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}?${queryKey}=${initialStep}`
      );
    }
  }, [initialStep, queryKey, searchParams]);

  return { currentStep: step, Funnel, nextStep, prevStep } as const;
}
