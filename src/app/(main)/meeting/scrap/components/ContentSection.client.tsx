'use client';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingScrap } from '@/apis/meeting';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';
import { Fragment } from 'react';

export default function ContentSection() {
  const {
    data: { contents },
  } = useGetMeetingScrap();

  return (
    <Fragment>
      {contents.length === 0 && <NoMeeting message="아직 찜한 모임이 없어요." />}
      <ItemList data={contents} renderItem={(content) => <GroupingCard groupingData={content} />} />
    </Fragment>
  );
}
