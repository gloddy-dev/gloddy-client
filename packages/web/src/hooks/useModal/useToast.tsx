import useModal from './useModal';
import { Toast } from '@/components/Modal';

export default function useToast() {
  const { open, close, exit } = useModal({ delay: 2000 });
  const openToast = (message: string) => open(() => <Toast>{message}</Toast>);
  return { openToast, close, exit };
}
