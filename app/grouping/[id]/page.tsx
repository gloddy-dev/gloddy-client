import BoardContent from './components/board/BoardContent.server';
import ContentSection from './components/ContentSection.client';
import DetailContent from './components/detail/DetailContent.server';
import GroupingTopNavigationBar from './components/GroupingTopNavigationBar.client';
import TopSection from './components/TopSection.client';

import type { GroupResponse } from '@/apis/groups';

const DETAIL_DUMMY_DATA: GroupResponse = {
  imageUrl: '/assets/main_logo.png',
  title: 'Let’s go for a walk!',
  content: 'It’s a group that \n🏃walks around, \n🗣talks, \n🌏and learns languages.',
  memberCount: 2,
  maxUser: 4,
  place: '동대문구 회기동',
  meetDate: '2021-10-10',
  startTime: '10:00',
  endTime: '12:00',
  placeLatitude: 37.589039,
  placeLongitude: 127.057761,
  isCaptain: true,
  myGroup: true,
};

export default function GroupingByIdPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const data = DETAIL_DUMMY_DATA;

  return (
    <main>
      <GroupingTopNavigationBar />
      <TopSection groupData={data} />
      <ContentSection
        groupingId={id}
        detailNode={<DetailContent groupData={data} />}
        boardNode={<BoardContent />}
      />
    </main>
  );
}
