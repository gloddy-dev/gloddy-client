/* eslint-disable react/jsx-no-useless-fragment */
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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
  steps: Readonly<Steps>,
  options?: { initialStep?: Steps[number]; stepQueryKey?: string }
) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialStep = options?.initialStep ?? steps[0];
  const queryKey = options?.stepQueryKey ?? 'step';

  let currentStep = searchParams.get(queryKey)!;
  if (!steps.includes(currentStep)) {
    currentStep = initialStep;
  }

  const [step, setStep] = useState<Steps[number]>(currentStep);

  const nextStep = () => {
    const currentIndex = steps.indexOf(step);

    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);

      router.push(`${pathname}?${queryKey}=${steps[currentIndex + 1]}`);
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
      .filter((child) => (child.props as StepProps<Steps>).name !== undefined);

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

  window.onpopstate = () => {
    const currentStep = searchParams.get(queryKey) as Steps[number];
    if (currentStep === null) {
      return;
    }

    if (steps.includes(currentStep)) {
      setStep(currentStep);
      return;
    }

    setStep(initialStep);
  };

  useEffect(() => {
    if (step === initialStep) {
      router.replace(`${pathname}?${queryKey}=${initialStep}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { currentStep: step, Funnel, nextStep, prevStep };
}
