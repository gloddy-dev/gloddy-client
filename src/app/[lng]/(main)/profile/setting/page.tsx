import LinkSection from './components/LinkSection.server';
import ProfileSection from './components/ProfileSection.client';
import SettingHeader from './components/SettingHeader.client';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface PageParams {
  params: {
    lng: string;
  };
}

export default function page({ params: { lng } }: PageParams) {
  return (
    <>
      <SettingHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback}>
        <ProfileSection />
      </QueryAsyncBoundary>
      <LinkSection lng={lng} />
    </>
  );
}
