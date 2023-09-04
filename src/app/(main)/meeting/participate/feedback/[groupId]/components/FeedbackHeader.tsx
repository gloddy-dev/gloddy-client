import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

interface FeedbackHeaderProps {
  message: string;
  onPrevClick: () => void;
}
export default function FeedbackHeader({ message, onPrevClick }: FeedbackHeaderProps) {
  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={onPrevClick}>
          <Image src="/icons/24/arrow_back.svg" width={24} height={24} alt="back" />
        </IconButton>
        <p>{message}</p>
      </Header.Left>
    </Header>
  );
}
