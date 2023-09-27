import ArticleSection from './ArticleSection.client';
import NoticeSection from './NoticeSection.client';
import { useGetGroupDetail } from '@/apis/groups';
import { FloatAddButton } from '@/components/Button';
import { useNumberParams } from '@/hooks/useNumberParams';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ArticlesContent() {
  const pathname = usePathname();
  const { groupId } = useNumberParams<['groupId']>();

  const { data: groupDetailData } = useGetGroupDetail(groupId);

  return (
    <>
      <NoticeSection {...groupDetailData} />
      <ArticleSection {...groupDetailData} />
      <div className="bottom-fixed flex justify-end">
        <Link href={`${pathname}/write`}>
          <FloatAddButton />
        </Link>
      </div>
    </>
  );
}
