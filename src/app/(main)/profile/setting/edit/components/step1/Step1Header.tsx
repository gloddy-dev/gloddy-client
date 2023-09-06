import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import Link from 'next/link';

export default function Step1Header() {
  return (
    <Header>
      <Header.Left className="px-4">
        <Link href="/profile/setting">
          <IconButton size="large">
            <Icon id="24-close" />
          </IconButton>
        </Link>
        <p className="text-subtitle-1">프로필 수정</p>
      </Header.Left>
    </Header>
  );
}
