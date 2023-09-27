'use client';
import FeedbackOutModal from '../funnels/step1/FeedbackOutModal.client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useModal } from '@/hooks/useModal';

interface FeedbackHeaderProps {
  message: string;
  onPrevClick?: () => void;
}
export default function FeedbackHeader({ message, onPrevClick }: FeedbackHeaderProps) {
  const { open, exit } = useModal();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton
          size="large"
          onClick={() => {
            if (typeof onPrevClick === 'function') {
              onPrevClick();
            } else {
              open(() => <FeedbackOutModal onClose={exit} />);
            }
          }}
        >
          <Icon id="24-arrow_back" />
        </IconButton>
        <p>{message}</p>
      </Header.Left>
    </Header>
  );
}
