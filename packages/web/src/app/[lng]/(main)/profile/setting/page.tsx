import { ErrorBoundary } from 'react-error-boundary';

import LinkSection from './components/LinkSection';
import ProfileSection from './components/ProfileSection';
import SettingHeader from './components/SettingHeader';

import { ErrorFallback } from '@/components/ErrorBoundary';

interface PageParams {
  params: {
    lng: string;
  };
}

export default function page({ params: { lng } }: PageParams) {
  return (
    <>
      <SettingHeader />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <ProfileSection />
      </ErrorBoundary>
      <LinkSection lng={lng} />
    </>
  );
}
