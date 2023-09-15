import LinkSection from './components/LinkSection.server';
import ProfileSection from './components/ProfileSection.client';
import SettingHeader from './components/SettingHeader';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { PageAnimation } from '@/components/PageAnimation';
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
        <PageAnimation>
          <ProfileSection />
          <LinkSection lng={lng} />
        </PageAnimation>
      </QueryAsyncBoundary>
    </>
  );
}
