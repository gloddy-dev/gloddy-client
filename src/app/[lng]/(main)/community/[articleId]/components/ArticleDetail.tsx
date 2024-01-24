'use client';

import { useGetCommunityArticleDetail, useGetCommunityComments } from '@/apis/community';
import ArticleItem from '@/app/[lng]/(main)/community/[articleId]/components/ArticleItem';
import CommentList from '@/app/[lng]/(main)/community/[articleId]/components/CommentList';
import { useTranslation } from '@/app/i18n/client';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';

interface ArticleDetailProps {
  articleId: number;
}

export default function ArticleDetail({ articleId }: ArticleDetailProps) {
  const { t } = useTranslation('community');

  const { data: articleData } = useGetCommunityArticleDetail(articleId);
  const { data: articleComments } = useGetCommunityComments(articleId);
  const commentCount = articleData.data.article.commentCount;
  const commentsList = articleComments.data.comments;

  return (
    <>
      <ArticleItem article={articleData.data} />
      <Divider thickness="thick" />
      <Spacing size={20} />
      <p className="px-24 text-subtitle-3 text-sign-primary">
        {t('detail.commentCount', { commentCount })}
      </p>
      <Spacing size={8} />
      <CommentList commentList={commentsList} articleWriterId={articleData.data.writer.id} />
    </>
  );
}
