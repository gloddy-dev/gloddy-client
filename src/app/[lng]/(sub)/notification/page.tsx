import NotificationHeader from './components/NotificationHeader';
import NotificationSection from './components/NotificationSection';
import { Keys, getNotification } from '@/apis/notifications';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
import { HydrationProvider } from '@/components/Provider';

export default async function NotificationPage() {
  return (
    <>
      <NotificationHeader />
      <LocalApiAsyncBoundary>
        <HydrationProvider queryFn={getNotification} queryKey={Keys.getNotifications()}>
          <NotificationSection />
        </HydrationProvider>
      </LocalApiAsyncBoundary>
    </>
  );
}
