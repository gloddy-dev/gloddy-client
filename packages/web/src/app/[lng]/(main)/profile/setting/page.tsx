import LinkSection from './components/LinkSection';
import ProfileSection from './components/ProfileSection';
import SettingHeader from './components/SettingHeader';

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
