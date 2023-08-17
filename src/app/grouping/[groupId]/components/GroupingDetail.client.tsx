'use client';
import BoardContent from './board/BoardContent.client';
import ContentSection from './ContentSection.client';
import DetailContent from './detail/DetailContent.client';
import GroupingHeader from './GroupingHeader.client';
import TopSection from './TopSection.client';
import { useGetGroupDetail } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';

interface GroupingDetailProps {
  groupId: number;
}

export default function GroupingDetail({ groupId }: GroupingDetailProps) {
  const { data: groupDetailData } = useGetGroupDetail(groupId);

  return (
    <main className="bg-white">
      <GroupingHeader title={groupDetailData.title} />
      <TopSection groupDetailData={groupDetailData} />
      <ContentSection
        detailNode={<DetailContent groupDetailData={groupDetailData} />}
        boardNode={<BoardContent myGroup={groupDetailData.myGroup} />}
      />
    </main>
  );
}
