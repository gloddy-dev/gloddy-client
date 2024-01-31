import NotificationHeader from './components/NotificationHeader';
import NotificationSection from './components/NotificationSection';
import { Keys, getNotification } from '@/apis/notifications';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

export default async function NotificationPage() {
  return (
    <>
      <NotificationHeader />
      <LocalSuspenseErrorBoundary>
        <HydrationProvider queryFn={getNotification} queryKey={Keys.getNotifications()}>
          <NotificationSection />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
    </>
  );
}
