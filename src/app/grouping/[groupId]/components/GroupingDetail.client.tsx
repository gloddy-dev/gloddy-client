'use client';
import BoardContent from './board/BoardContent.client';
import ContentSection from './ContentSection.client';
import DetailContent from './detail/DetailContent.client';
import GroupingHeader from './GroupingHeader.client';
import TopSection from './TopSection.client';
import { useGetGroupDetail } from '@/apis/groups';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';

interface GroupingDetailProps {
  groupId: number;
}

export default function GroupingDetail({ groupId }: GroupingDetailProps) {
  const { data: groupDetailData } = useGetGroupDetail(groupId);

  return (
    <main className="bg-white">
      <GroupingHeader title={groupDetailData.title} isCaptain={groupDetailData.isCaptain} />
      <TopSection groupDetailData={groupDetailData} />
      <ContentSection
        detailNode={<DetailContent groupDetailData={groupDetailData} />}
        boardNode={<BoardContent groupDetailData={groupDetailData} />}
      />
      <Spacing size={100} />
      {!groupDetailData.myGroup && (
        <ButtonGroup>
          <Button as="a" href={`/grouping/${groupId}/apply`}>
            모임 가입하기
          </Button>
        </ButtonGroup>
      )}
    </main>
  );
}
