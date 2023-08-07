'use client';
import IntroductionSection from './IntroductionSection.client';
import ProfileSection from './ProfileSection.client';
import { useGetProfile } from '@/apis/profile';

export default function ProfileDetail() {
  const { data: profileData } = useGetProfile();

  return (
    <div className="h-full bg-white2">
      <ProfileSection profileData={profileData} />
      <IntroductionSection profileData={profileData} />
    </div>
  );
}
