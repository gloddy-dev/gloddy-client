'use client';
import GroupingCard from './GroupingCard.client';
import { useGetGroups } from '@/apis/groups/queries.client';

export default function GroupingCardList() {
  const { data } = useGetGroups(0);

  return (
    <section className="mx-20 flex flex-col gap-8">
      {data?.contents.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}
    </section>
  );
}
