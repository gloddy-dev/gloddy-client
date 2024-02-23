'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';

export default function VerifyHeader() {
  const { back } = useAppRouter();
  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={back}>
          <Icon id="24-arrow_back" />
        </IconButton>
      </Header.Left>
    </Header>
  );
}
