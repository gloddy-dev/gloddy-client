'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';

export default function GroupingCardList() {
  const { data } = useGetGroups();

  return (
    <section className="mx-20 flex flex-col gap-8">
      {data.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}
    </section>
  );
}
