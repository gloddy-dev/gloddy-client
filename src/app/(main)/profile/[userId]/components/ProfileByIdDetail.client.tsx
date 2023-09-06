'use client';
import ProfileDetail from '../../components/ProfileDetail.client';
import { useGetProfileById } from '@/apis/profile';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function ProfileById() {
  const { userId } = useNumberParams();

  const { data: profileData } = useGetProfileById(userId);

  return <ProfileDetail profileData={profileData} />;
}
