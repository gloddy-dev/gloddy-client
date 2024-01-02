import { CommunityArticle } from '@/apis/groups';
import ArticleItem from '@/app/[lng]/(main)/community/[articleId]/components/ArticleItem';
import CommentList from '@/app/[lng]/(main)/community/[articleId]/components/CommentList';
import { useTranslation } from '@/app/i18n/client';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';

interface DetailContentProps {
  articleData: CommunityArticle;
}

export default function ArticleDetail({ articleData }: DetailContentProps) {
  const { title, likeCount, articleId, content, images, commentCount } = articleData;
  const { t } = useTranslation('community');

  return (
    <>
      <ArticleItem article={articleData} />
      <Divider thickness="thick" />
      <Spacing size={20} />
      <p className="px-24">{t('detail.commentCount', { commentCount })}</p>
      <Spacing size={8} />
      <CommentList />
    </>
  );
}
