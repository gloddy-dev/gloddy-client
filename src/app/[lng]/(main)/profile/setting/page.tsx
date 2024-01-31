import LinkSection from './components/LinkSection.server';
import ProfileSection from './components/ProfileSection.client';
import SettingHeader from './components/SettingHeader.client';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';

interface PageParams {
  params: {
    lng: string;
  };
}

export default function page({ params: { lng } }: PageParams) {
  return (
    <>
      <SettingHeader />
      <LocalSuspenseErrorBoundary>
        <ProfileSection />
      </LocalSuspenseErrorBoundary>
      <LinkSection lng={lng} />
    </>
  );
}
