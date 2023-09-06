import ProfileByIdDetail from './components/ProfileByIdDetail.client';
import ProfileByIdHeader from './components/ProfileByIdHeader';
import { Keys, getProfileById } from '@/apis/profile';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

interface PageProps {
  params: {
    userId: string;
  };
}

export default function page({ params }: PageProps) {
  const userId = Number(params.userId);

  return (
    <Suspense>
      <PageAnimation className="h-full bg-sub">
        <HydrationProvider
          queryFn={() => getProfileById(userId)}
          queryKey={Keys.getProfileById(userId)}
        >
          <ProfileByIdHeader />
          <ProfileByIdDetail />
        </HydrationProvider>
      </PageAnimation>
    </Suspense>
  );
}
