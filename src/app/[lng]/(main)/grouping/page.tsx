import CreateGroupButton from './components/CreateGroupButton.client';
import GroupingCardList from './components/GroupingCardList.client';
import GroupingHeader from './components/GroupingHeader';
import { Footer } from '@/components/Footer';
import { Loading } from '@/components/Loading';
import { Spacing } from '@/components/Spacing';
import { Suspense } from 'react';

interface GroupingPageProps {
  params: {
    lng: string;
  };
}

export default function GroupingPage({ params: { lng } }: GroupingPageProps) {
  return (
    <>
      <GroupingHeader />
      <Suspense fallback={<Loading />}>
        <GroupingCardList />
      </Suspense>
      <CreateGroupButton />
      <Spacing size={60} />
      <Footer page="grouping" lng={lng} />
    </>
  );
}
