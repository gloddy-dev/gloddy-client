'use client';
import { useGetProfileById } from '@/apis/profile';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useRouter } from 'next/navigation';

export default function ProfileByIdHeader() {
  const { userId } = useNumberParams();
  const { data: profileData } = useGetProfileById(userId);
  const { name } = profileData;
  const router = useRouter();

  return (
    <Header>
      <Header.Left>
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-close" />
        </IconButton>
        <p>{name}</p>
      </Header.Left>
    </Header>
  );
}
