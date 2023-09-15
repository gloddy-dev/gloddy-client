import LinkSection from './components/LinkSection.server';
import ProfileSection from './components/ProfileSection.client';
import SettingHeader from './components/SettingHeader';
import { Suspense } from 'react';

interface PageParams {
  params: {
    lng: string;
  };
}

export default function page({ params: { lng } }: PageParams) {
  return (
    <>
      <SettingHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileSection />
      </Suspense>
      <LinkSection lng={lng} />
    </>
  );
}
