'use client';
import { CommunityArticle } from '@/apis/groups';
import ArticleDetail from '@/app/[lng]/(main)/community/[articleId]/components/ArticleDetail';
import ArticleDetailHeader from '@/app/[lng]/(main)/community/[articleId]/components/ArticleDetailHeader';
import { useTranslation } from '@/app/i18n/client';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';

interface CommunityArticlePageProps {
  params: {
    articleId: string;
  };
}

const useDummyDetailData = (id: string): CommunityArticle => {
  const articleData: CommunityArticle[] = [...DUMMY_ARTICLES_DATA];

  return articleData.filter((article) => article.articleId === Number(id))[0];
};

export default function CommunityArticlePage({ params }: CommunityArticlePageProps) {
  const { t } = useTranslation('community');

  const dummyData = useDummyDetailData(params.articleId);

  const {
    title,
    articleType,
    likeCount,
    articleId,
    content,
    date,
    images,
    isWriterCaptain,
    isWriter,
    isWriterCertifiedStudent,
    writerReliabilityLevel,
    name,
    notice,
    userImageUrl,
    userId,
    commentCount,
  } = dummyData;

  return (
    <>
      <ArticleDetailHeader title={t(articleType)} />
      <ArticleDetail articleData={dummyData} />
      <Divider thickness="thick" />
      <Spacing size={20} />
      <p className="px-24">{t('detail.commentCount', { commentCount })}</p>
      <Spacing size={8} />
    </>
  );
}
