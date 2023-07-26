import { useTimer } from '@/hooks/useTimer';
import { StrictPropsWithChildren } from '@/types';
import { createContext, useContext } from 'react';

interface TimerContextProps extends ReturnType<typeof useTimer> {}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

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
