'use client';
import BoardContent from './board/BoardContent.client';
import ContentSection from './ContentSection.client';
import DetailContent from './detail/DetailContent.client';
import GroupingTopNavigationBar from './GroupingTopNavigationBar.client';
import TopSection from './TopSection.client';
import { useGetGroup } from '@/apis/groups/queries';

interface GroupingDetailProps {
  groupId: number;
}

export default function GroupingDetail({ groupId }: GroupingDetailProps) {
  const { data: groupData } = useGetGroup(groupId);

  if (!groupData) return null;

  return (
    <>
      <GroupingTopNavigationBar />
      <TopSection groupData={groupData} />
      <ContentSection
        detailNode={<DetailContent groupData={groupData} />}
        boardNode={<BoardContent myGroup={groupData.myGroup} />}
      />
    </>
  );
}
