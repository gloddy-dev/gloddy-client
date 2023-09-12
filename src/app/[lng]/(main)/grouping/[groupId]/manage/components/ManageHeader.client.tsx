'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useRouter } from 'next/navigation';

export default function ManageHeader() {
  const router = useRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-close" />
        </IconButton>
        <p>모임 지원서 관리</p>
      </Header.Left>
    </Header>
  );
}
