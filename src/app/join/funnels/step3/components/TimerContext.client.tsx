'use client';

import { useTimer } from '@/hooks/useTimer';
import { createContext, useContext } from 'react';

import type { StrictPropsWithChildren } from '@/types';

interface TimerContextProps extends ReturnType<typeof useTimer> {}

const TimerContext = createContext<TimerContextProps | null>(null);

export default function TimerContextProvider({ children }: StrictPropsWithChildren) {
  const timerValue = useTimer({
    initialTime: 180,
    timerType: 'DECREMENTAL',
    endTime: 0,
  });

  return <TimerContext.Provider value={timerValue}>{children}</TimerContext.Provider>;
}

const useTimerContext = () => {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error('Cannot find Context. It should be wrapped within ContextProvider.');
  return ctx;
};
export { useTimerContext };
