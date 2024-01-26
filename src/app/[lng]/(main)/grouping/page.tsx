import CreateGroupButton from './components/CreateGroupButton.client';
import GroupingCardList from './components/GroupingCardList.client';
import GroupingHeader from './components/GroupingHeader';
import { Keys, getGroups } from '@/apis/groups';
import LocalErrorSuspenseBoundary from '@/components/ErrorBoundary/LocalErrorSuspenseBoundary';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

interface GroupingPageProps {
  params: {
    lng: string;
  };
}

export default function GroupingPage({ params: { lng } }: GroupingPageProps) {
  return (
    <>
      <GroupingHeader />
      <LocalErrorSuspenseBoundary>
        <HydrationProvider queryFn={() => getGroups(0)} queryKey={Keys.getGroups()} isInfiniteQuery>
          <GroupingCardList />
        </HydrationProvider>
      </LocalErrorSuspenseBoundary>
      <CreateGroupButton />
      <Spacing size={60} />
      <Footer page="grouping" lng={lng} />
    </>
  );
}
