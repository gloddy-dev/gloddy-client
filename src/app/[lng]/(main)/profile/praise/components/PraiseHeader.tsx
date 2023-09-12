import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import Link from 'next/link';

export default function PraiseHeader() {
  return (
    <Header>
      <Header.Left className="px-4">
        <Link href="/profile">
          <IconButton size="large">
            <Icon id="24-arrow_back" />
          </IconButton>
        </Link>
        <p className="text-subtitle-1">받은 칭찬</p>
      </Header.Left>
    </Header>
  );
}
