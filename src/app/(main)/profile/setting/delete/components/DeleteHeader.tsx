import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';

interface DeleteHeaderProps {
  onPrevClick: () => void;
  icon: 'close' | 'arrow_back';
}
export default function DeleteHeader({ onPrevClick, icon }: DeleteHeaderProps) {
  return (
    <Header>
      <Header.Left>
        <IconButton size="large" onClick={onPrevClick}>
          <Icon id={`24-${icon}`} />
        </IconButton>
        <p>회원 탈퇴</p>
      </Header.Left>
    </Header>
  );
}
