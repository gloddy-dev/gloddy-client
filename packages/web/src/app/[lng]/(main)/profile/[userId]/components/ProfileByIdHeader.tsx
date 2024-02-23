'use client';
import { useGetProfileById } from '@/apis/profile';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function ProfileByIdHeader() {
  const { userId } = useNumberParams();
  const { data: profileData } = useGetProfileById(userId);
  const { nickname } = profileData;
  const { back } = useAppRouter();

  return (
    <Header>
      <Header.Left>
        <IconButton size="large" onClick={back}>
          <Icon id="24-close" />
        </IconButton>
        <p>{nickname}</p>
      </Header.Left>
    </Header>
  );
}
