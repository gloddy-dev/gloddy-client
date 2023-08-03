'use client';
import ProfileSection from './ProfileSection.client';
import ProfileTopNavigationBar from './ProfileTopNavigationBar.client';
import { useGetProfile } from '@/apis/profile';
import { BottomNavigationBar } from '@/components/common/NavigationBar';

export default function ProfileDetail() {
  const { data: profileData } = useGetProfile();
  return (
    <div className="h-full bg-gray9 px-20">
      <ProfileTopNavigationBar />
      <ProfileSection profileData={profileData} />
      {/* <IntroductionSection />
      <PersonlitySection /> */}
      <BottomNavigationBar page="profile" />
    </div>
  );
}
