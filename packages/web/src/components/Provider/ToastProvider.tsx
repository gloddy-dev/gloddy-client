import ModalProvider from '@/hooks/useModal/ModalProvider';
import { StrictPropsWithChildren } from '@/types';

export default function ToastProvider({ children }: StrictPropsWithChildren) {
  return <ModalProvider>{children}</ModalProvider>;
}
