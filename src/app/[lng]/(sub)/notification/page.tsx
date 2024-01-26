import NotificationHeader from './components/NotificationHeader';
import NotificationSection from './components/NotificationSection';
import { Keys, getNotification } from '@/apis/notifications';
import LocalErrorSuspenseBoundary from '@/components/ErrorBoundary/LocalErrorSuspenseBoundary';
import { HydrationProvider } from '@/components/Provider';

export default async function NotificationPage() {
  return (
    <>
      <NotificationHeader />
      <LocalErrorSuspenseBoundary>
        <HydrationProvider queryFn={getNotification} queryKey={Keys.getNotifications()}>
          <NotificationSection />
        </HydrationProvider>
      </LocalErrorSuspenseBoundary>
    </>
  );
}
