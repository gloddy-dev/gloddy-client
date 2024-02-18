'use client';

import ProfileDetailSection from './ProfileDetailSection.client';

import { useGetProfile } from '@/apis/profile';

export default function ProfileDetail() {
  const { data: profileData } = useGetProfile();

  return <ProfileDetailSection profileData={profileData} />;
}
