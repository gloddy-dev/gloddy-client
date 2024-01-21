'use client';

import ArticleDetail from '@/app/[lng]/(main)/community/[articleId]/components/ArticleDetail';
import ArticleDetailHeader from '@/app/[lng]/(main)/community/[articleId]/components/ArticleDetailHeader';
import CommentForm from '@/app/[lng]/(main)/community/[articleId]/components/CommentForm';
import { useTranslation } from '@/app/i18n/client';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';

interface CommunityArticlePageProps {
  params: {
    articleId: string;
  };
}


export default function CommunityArticlePage({ params }: CommunityArticlePageProps) {
  const { t } = useTranslation('community');

  return (
    <>
      {/*<ArticleDetailHeader title={t()} />*/}
      {/*<ArticleDetail articleData={dummyData} />*/}
      {/*<CommentForm />*/}
      <div></div>
    </>
  );
}
