'use client';

import CommentList from './CommentList.client';
import { useGetArticle, useGetGroupDetail } from '@/apis/groups';
import ArticleItem from '@/app/(main)/grouping/components/ArticleItem.client';
import { Spacing } from '@/components/common/Spacing';

interface BoardDetailProps {
  groupId: number;
  boardId: number;
}
export default function BoardDetail({ groupId, boardId }: BoardDetailProps) {
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { data: articleData } = useGetArticle(groupId, boardId);
  const { isCaptain } = groupDetailData;

  return (
    <div className="px-20">
      <ArticleItem article={articleData} isCaptain={isCaptain} isBoardDetail />
      <Spacing size={20} />
      <CommentList groupId={groupId} boardId={boardId} />
    </div>
  );
}
