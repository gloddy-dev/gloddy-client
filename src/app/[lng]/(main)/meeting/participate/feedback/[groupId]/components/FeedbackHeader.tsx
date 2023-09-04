import FeedbackOutModal from '../funnels/step1/FeedbackOutModal.client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

interface FeedbackHeaderProps {
  message: string;
  onPrevClick?: () => void;
}
export default function FeedbackHeader({ message, onPrevClick }: FeedbackHeaderProps) {
  const { open, close } = useModal();
  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton
          size="large"
          onClick={() => {
            if (typeof onPrevClick === 'function') {
              onPrevClick();
            } else {
              open(<FeedbackOutModal onClose={close} />);
            }
          }}
        >
          <Image src="/icons/24/arrow_back.svg" width={24} height={24} alt="back" />
        </IconButton>
        <p>{message}</p>
      </Header.Left>
    </Header>
  );
}
