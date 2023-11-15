import NotificationHeader from './components/NotificationHeader';
import NotificationSection from './components/NotificationSection';
import { Keys, getNotification } from '@/apis/notifications';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

import { PageAnimation } from '@/components/PageAnimation';

export default async function NotificationPage() {
  return (
    <>
      <NotificationHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <PageAnimation>
          {/* <HydrationProvider queryFn={getNotification} queryKey={Keys.getNotifications()}> */}
          <NotificationSection />
          {/* </HydrationProvider> */}
        </PageAnimation>
      </QueryAsyncBoundary>
    </>
  );
}
