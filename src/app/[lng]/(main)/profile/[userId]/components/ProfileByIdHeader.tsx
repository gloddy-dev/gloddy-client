'use client';
import { useGetProfileById } from '@/apis/profile';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
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
          <Image src="/icons/24/close.svg" width={24} height={24} alt="close" />
        </IconButton>
        <p>{name}</p>
      </Header.Left>
    </Header>
  );
}
