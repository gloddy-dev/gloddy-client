import ArticleSection from './ArticleSection.client';
import NoticeSection from './NoticeSection.client';
import { useGetGroupDetail } from '@/apis/groups';
import { FloatAddButton } from '@/components/Button';
import { NavLink } from '@/components/NavLink';
import { useNumberParams } from '@/hooks/useNumberParams';
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
        <NavLink href={`${pathname}/write`}>
          <FloatAddButton />
        </NavLink>
      </div>
    </>
  );
}
