import { useModals } from '@/hooks/useModals';
import { useTimer } from '@/hooks/useTimer';
import { StrictPropsWithChildren } from '@/types';
import { createContext, useContext } from 'react';

interface Step3ContextProps extends ReturnType<typeof useTimer>, ReturnType<typeof useModals> {
  openModal: (modalName: string) => void;
}
const Step3Context = createContext<Step3ContextProps | undefined>(undefined);

export default function Step3ContextProvider({ children }: StrictPropsWithChildren) {
  const modalValues = useModals();
  const timerValues = useTimer({
    initialTime: 180,
    timerType: 'DECREMENTAL',
    endTime: 0,
  });

  const values = { ...modalValues, ...timerValues };

  return <Step3Context.Provider value={values}>{children}</Step3Context.Provider>;
}

const useStep3Context = () => {
  const ctx = useContext(Step3Context);
  if (!ctx) throw new Error('Cannot find Context. It should be wrapped within ContextProvider.');
  return ctx;
};
export { useStep3Context };
