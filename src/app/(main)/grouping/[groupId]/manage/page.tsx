import ManageDetail from './components/ManageDetail.client';
import ManageHeader from './components/ManageHeader';
import { Suspense } from 'react';

export default function GroupingManagePage() {
  return (
    <>
      <ManageHeader />
      <Suspense fallback={null}>
        <ManageDetail />
      </Suspense>
    </>
  );
}
