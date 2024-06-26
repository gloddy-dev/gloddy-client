'use client';

import CommentList from './CommentList';

import { useGetArticle, useGetGroupDetail } from '@/apis/groups';
import ArticleItem from '@/app/[lng]/(main)/grouping/components/ArticleItem';
import { useTranslation } from '@/app/i18n/client';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function ArticleDetail() {
  const { t } = useTranslation('groupDetail');
  const { articleId, groupId } = useNumberParams<['articleId', 'groupId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { data: articleData } = useGetArticle(groupId, articleId);

  const { isCaptain } = groupDetailData;
  const { commentCount } = articleData;

  return (
    <>
      <ArticleItem
        article={articleData}
        isCaptain={isCaptain}
        groupId={groupId}
        isArticleDetailPage
      />
      <Divider thickness="thick" />
      <Spacing size={20} />
      <p className="px-24">{t('board.commentCount', { commentCount })}</p>
      <Spacing size={8} />
      <Divider thickness="thin" />
      <CommentList />
    </>
  );
}
