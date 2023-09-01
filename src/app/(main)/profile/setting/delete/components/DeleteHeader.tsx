import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';

interface DeleteHeaderProps {
  onPrevClick: () => void;
  icon: 'close' | 'arrow_back';
}
export default function DeleteHeader({ onPrevClick, icon }: DeleteHeaderProps) {
  return (
    <Header>
      <Header.Left>
        <IconButton size="large" onClick={onPrevClick}>
          <Image src={`/icons/24/${icon}.svg`} width={24} height={24} alt="back" />
        </IconButton>
        <p>회원 탈퇴</p>
      </Header.Left>
    </Header>
  );
}
