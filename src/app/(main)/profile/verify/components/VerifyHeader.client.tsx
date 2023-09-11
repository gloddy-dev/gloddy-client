'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useRouter } from 'next/navigation';

export default function VerifyHeader() {
  const router = useRouter();
  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
      </Header.Left>
    </Header>
  );
}
