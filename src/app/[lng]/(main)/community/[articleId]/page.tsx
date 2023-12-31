import { Article, CommunityArticle } from '@/apis/groups';
import ArticleDetailHeader from '@/app/[lng]/(main)/community/[articleId]/components/ArticleDetailHeader';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';

interface CommunityArticlePageProps {
  params: {
    articleId: string;
  };
}

const useDummyDetailData = (id: string): Article => {
  const articleData: CommunityArticle[] = [...DUMMY_ARTICLES_DATA];

  return articleData.filter((article) => article.articleId === Number(id))[0];
};

export default function CommunityArticlePage({ params }: CommunityArticlePageProps) {
  const dummyData = useDummyDetailData(params.articleId);

  const {
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
      <ArticleDetailHeader titleCategory={'asdasd'} />
      <div>
        <h1>커뮤니티 글 페이지</h1>
      </div>
    </>
  );
}
