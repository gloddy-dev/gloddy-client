import { Suspense } from 'react';

import DeleteSection from './components/DeleteSection';

export default function page() {
  return (
    <Suspense>
      <DeleteSection />
    </Suspense>
  );
}
