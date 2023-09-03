'use client';
import ProfileDetailSection from '../../components/ProfileDetailSection';
import { useGetProfileById } from '@/apis/profile';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function ProfileById() {
  const { userId } = useNumberParams();

  const { data: profileData } = useGetProfileById(userId);

  return <ProfileDetailSection profileData={profileData} />;
}
