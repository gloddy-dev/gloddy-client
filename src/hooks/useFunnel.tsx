/* eslint-disable react/jsx-no-useless-fragment */
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Children, isValidElement, useEffect } from 'react';

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
  options?: {
    initialStep?: Steps[number];
    stepQueryKey?: string;
  }
) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialStep = options?.initialStep ?? steps[0];
  const queryKey = options?.stepQueryKey ?? 'step';

  let currentStep: Steps[number] = searchParams.get(queryKey)!;
  if (!steps.includes(currentStep)) {
    currentStep = initialStep;
  }

  const nextStep = () => {
    const currentIndex = steps.indexOf(currentStep);

    if (currentIndex < steps.length - 1) {
      router.push(`${pathname}?${queryKey}=${steps[currentIndex + 1]}`);
    }
  };

  const prevStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      router.back();
    }
  };

  const setStep = (step: Steps[number]) => {
    if (steps.includes(step)) {
      router.push(`${pathname}?${queryKey}=${step}`);
    }
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
    return currentStep === name ? <>{children}</> : null;
  };

  useEffect(() => {
    if (currentStep === initialStep) {
      router.replace(`${pathname}?${queryKey}=${initialStep}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  Funnel.Step = Step;

  return { currentStep, Funnel, nextStep, prevStep, setStep };
}
