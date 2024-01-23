'use client';

import { useGetCommunityArticleDetail } from '@/apis/community';
import ArticleItem from '@/app/[lng]/(main)/community/[articleId]/components/ArticleItem';
import { useTranslation } from '@/app/i18n/client';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';

interface ArticleDetailProps {
  articleId: number;
}

export default function ArticleDetail({ articleId }: ArticleDetailProps) {
  const { t } = useTranslation('community');

  const { data: articleData } = useGetCommunityArticleDetail(articleId);
  const commentCount = articleData.data.article.commentCount;

  return (
    <>
      <ArticleItem article={articleData.data} />
      <Divider thickness="thick" />
      <Spacing size={20} />
      <p className="px-24 text-subtitle-3 text-sign-primary">
        {t('detail.commentCount', { commentCount })}
      </p>
      <Spacing size={8} />
      {/*<CommentList commentList={DUMMY_COMMENTS_DATA} />*/}
    </>
  );
}
