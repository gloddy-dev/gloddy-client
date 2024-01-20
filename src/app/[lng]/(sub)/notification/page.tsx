import NotificationHeader from './components/NotificationHeader';
import NotificationSection from './components/NotificationSection';
import { Keys, getNotification } from '@/apis/notifications';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

export default async function NotificationPage() {
  return (
    <>
      <NotificationHeader />
      <Suspense fallback={<Loading />}>
        <HydrationProvider queryFn={getNotification} queryKey={Keys.getNotifications()}>
          <NotificationSection />
        </HydrationProvider>
      </Suspense>
    </>
  );
}
