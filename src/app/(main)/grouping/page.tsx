import GroupingCardList from './components/GroupingCardList.client';
import { getGroups } from '@/apis/groups/apis';
import { Keys } from '@/apis/groups/keys';
import { FloatAddButton } from '@/components/Button';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { BottomNavigationBar } from '@/components/common/NavigationBar';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { Spacing } from '@/components/common/Spacing';
import { Header } from '@/components/Header';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import Image from 'next/image';
import Link from 'next/link';

export default function Grouping() {
  return (
    <>
      <Header className="px-20">
        <Header.Left>매칭</Header.Left>
        <Header.Right>
          <Image src="icons/24/search.svg" width={24} height={24} alt="search" />
        </Header.Right>
      </Header>
      <Spacing size={18} />

      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getGroups()} queryFn={() => getGroups(0)} isInfiniteQuery>
          <GroupingCardList />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <Link href="/grouping/create" className="fixed inset-x-0 bottom-100 mx-auto flex max-w-400">
        <FloatAddButton className="ml-auto" />
      </Link>
      <BottomNavigationBar page="grouping" />
    </>
  );
}
