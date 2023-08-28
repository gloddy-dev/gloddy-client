import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';

interface Step2HeaderProps {
  onClose: () => void;
}

export default function Step2Header({ onClose }: Step2HeaderProps) {
  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={onClose}>
          <Image src="/icons/24/close.svg" width={24} height={24} alt="back" />
        </IconButton>

        <p className="text-subtitle-1">성격 선택</p>
      </Header.Left>
    </Header>
  );
}
