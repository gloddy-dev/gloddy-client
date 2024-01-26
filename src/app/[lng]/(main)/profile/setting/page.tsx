import LinkSection from './components/LinkSection.server';
import ProfileSection from './components/ProfileSection.client';
import SettingHeader from './components/SettingHeader.client';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';

interface PageParams {
  params: {
    lng: string;
  };
}

export default function page({ params: { lng } }: PageParams) {
  return (
    <>
      <SettingHeader />
      <LocalApiAsyncBoundary>
        <ProfileSection />
      </LocalApiAsyncBoundary>
      <LinkSection lng={lng} />
    </>
  );
}
