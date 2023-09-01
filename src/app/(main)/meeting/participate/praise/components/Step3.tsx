import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';

interface Step3Props {
  onPrevClick: () => void;
  onNextClick: () => void;
}
export default function Step3({ onPrevClick, onNextClick }: Step3Props) {
  return (
    <div>
      <Header>
        <Header.Left>
          <IconButton onClick={onPrevClick}>
            <Image src="/icons/24/close.svg" width={24} height={24} alt="back" />
          </IconButton>
        </Header.Left>
      </Header>
    </div>
  );
}
