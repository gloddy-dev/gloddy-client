import ProfileDetail from './components/ProfileDetail.client';
import { Keys, getProfile } from '@/apis/profile';
import { RetryErrorBoundary } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import React, { Suspense } from 'react';

export default function Profile() {
  return (
    <RetryErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
          <ProfileDetail />
        </HydrationProvider>
      </Suspense>
    </RetryErrorBoundary>
  );
}
