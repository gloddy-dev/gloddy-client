import { ErrorBoundary } from 'react-error-boundary';

import CreateGroupButton from './components/CreateGroupButton';
import GroupingCardList from './components/GroupingCardList';
import GroupingHeader from './components/GroupingHeader';

import { Keys, getGroups } from '@/apis/groups';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';

export default async function GroupingPage() {
  return (
    <>
      <GroupingHeader />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider queryFn={() => getGroups(0)} queryKey={Keys.getGroups()} isInfiniteQuery>
          <GroupingCardList />
        </HydrationProvider>
      </ErrorBoundary>
      <CreateGroupButton />
      <Spacing size={60} />
    </>
  );
}
