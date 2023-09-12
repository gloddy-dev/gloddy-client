'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useRouter } from 'next/navigation';

export default function InformationHeader() {
  const router = useRouter();
  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-close" />
        </IconButton>
        <p className="text-subtitle-1">개인정보 처리 방침</p>
      </Header.Left>
    </Header>
  );
}
