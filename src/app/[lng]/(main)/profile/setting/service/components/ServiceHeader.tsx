'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useRouter } from 'next/navigation';

export default function ServiceHeader() {
  const router = useRouter();
  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-close" />
        </IconButton>
        <p className="text-subtitle-1">서비스 이용 약관</p>
      </Header.Left>
    </Header>
  );
}
