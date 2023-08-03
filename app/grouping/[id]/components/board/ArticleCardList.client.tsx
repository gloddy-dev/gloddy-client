import ArticleCard from './ArticleCard.client';
import { useGetArticles } from '@/apis/groups/queries';
import { useParams } from 'next/navigation';

export default function ArticleCardList() {
  const { id } = useParams() as { id: string };
  const groupId = Number(id);

  const { data: articlesData } = useGetArticles(groupId);

  if (!articlesData) return null;

  const { contents } = articlesData.pages[0];

  if (!contents.length) return <p>게시글이 없습니다.</p>;

  return (
    <div className="flex flex-col gap-15">
      {articlesData.pages.map(({ contents }) =>
        contents.map((article) => <ArticleCard key={article.articleId} article={article} />)
      )}
    </div>
  );
}
