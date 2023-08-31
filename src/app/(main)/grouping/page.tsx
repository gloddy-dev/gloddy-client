import GroupingCardList from './components/GroupingCardList.client';
import { getGroups } from '@/apis/groups/apis';
import { Keys } from '@/apis/groups/keys';
import { BottomFixedDiv } from '@/components/BottomFixedDiv';
import { FloatAddButton } from '@/components/Button';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import Link from 'next/link';

export default function Grouping() {
  return (
    <>
      <Header className="px-20">
        <Header.Left>매칭</Header.Left>
      </Header>

      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getGroups()} queryFn={() => getGroups(0)} isInfiniteQuery>
          <GroupingCardList />
          <GroupingCardList />
        </HydrationProvider>
      </QueryAsyncBoundary>
      {/* <Link href="/grouping/create"> */}
      {/* <div className="fixed inset-0 bottom-90 mx-auto max-w-450">
        <FloatAddButton className="absolute bottom-20 right-20 ml-auto" />
      </div> */}
      {/* </Link> */}
      <Footer page="grouping" />
    </>
  );
}
