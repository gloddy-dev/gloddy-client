'use client';

import CommentList from './CommentList.client';
import ArticleItem from '@/app/(main)/grouping/components/ArticleItem.client';
import { Spacing } from '@/components/common/Spacing';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';

interface BoardDetailProps {
  groupId: number;
  boardId: number;
}
export default function BoardDetail({ groupId, boardId }: BoardDetailProps) {
  // const { data: articleData } = useGetArticle(groupId, boardId);

  return (
    <div className="px-20">
      <ArticleItem article={DUMMY_ARTICLES_DATA[0]} isBoardDetail isCaptain={true} />
      <Spacing size={20} />
      <CommentList groupId={groupId} boardId={boardId} />
    </div>
  );
}
