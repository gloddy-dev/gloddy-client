'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useRouter } from 'next/navigation';

export default function MembersHeader() {
  const router = useRouter();

  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <p>모임 멤버</p>
      </Header.Left>
    </Header>
  );
}
