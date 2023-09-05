import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';

interface Step2HeaderProps {
  onClose: () => void;
}

export default function Step2Header({ onClose }: Step2HeaderProps) {
  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={onClose}>
          <Icon id="24-close" />
        </IconButton>

        <p className="text-subtitle-1">성격 선택</p>
      </Header.Left>
    </Header>
  );
}
