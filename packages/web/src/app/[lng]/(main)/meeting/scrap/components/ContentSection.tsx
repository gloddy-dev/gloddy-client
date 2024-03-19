'use client';

import { useGetMeetingScrap } from '@/apis/meeting';
import { GroupingCard } from '@/components/Card';
import { Empty } from '@/components/Empty';
import { ItemList } from '@/components/List';

interface ContentSectionProps {
  lng: string;
}

export default function ContentSection({ lng }: ContentSectionProps) {
  const {
    data: { contents },
  } = useGetMeetingScrap();

  return (
    <ItemList
      data={contents}
      renderItem={(content) => <GroupingCard groupingData={content} isScrapped />}
      renderEmpty={() => <Empty lng={lng} ns={'meeting'} message={'home.noFavoritedGroups'} />}
    />
  );
}
