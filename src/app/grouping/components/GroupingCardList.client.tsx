'use client';
import GroupingCard from './GroupingCard.client';
import { useGetGroups } from '@/apis/groups';
import { useRouter } from 'next/navigation';

export default function GroupingCardList() {
  const router = useRouter();
  const { data } = useGetGroups();

  return (
    <section className="mx-20 flex flex-col gap-8">
      {data.map((groupingData) => (
        <GroupingCard
          groupingData={groupingData}
          key={groupingData.groupId}
          onClick={() => router.push(`/grouping/${groupingData.groupId}`)}
        />
      ))}
    </section>
  );
}
