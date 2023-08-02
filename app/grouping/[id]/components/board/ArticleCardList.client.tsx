import ArticleCard from './ArticleCard.client';
import { useGetArticles } from '@/apis/groups/queries';
import { useParams } from 'next/navigation';

import type { Article } from '@/apis/groups/type';

const DUMMY_DATA: Article[] = [
  {
    articleId: 1,
    images: [],
    notice: true,
    userImageUrl: '/assets/avatar.svg',
    name: 'Kim',
    date: '2021.09.01',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
    commentCount: 0,
  },
  {
    articleId: 2,
    images: [],
    notice: false,
    userImageUrl: '/assets/avatar.svg',
    name: 'Kim',
    date: '2021.09.01',
    content: '안녕하세요! 모임에 가입해주셔서 감사드립니다.',
    commentCount: 100,
  },
  {
    articleId: 3,
    images: [],
    notice: false,
    userImageUrl: '/assets/avatar.svg',
    name: 'Kim',
    date: '2021.09.01',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
    commentCount: 0,
  },
];

export default function ArticleCardList() {
  const { id: groupId } = useParams() as { id: string };

  // const { data: articlesData } = useGetArticles(groupId);

  // if (!articlesData) return null;

  // const { contents } = articlesData.pages[0];

  // if (!contents.length) return <p>게시글이 없습니다.</p>;

  return (
    <div className="flex flex-col gap-15">
      {/* {articlesData.pages.map(({ contents }) =>
        contents.map((article) => <ArticleCard key={article.articleId} article={article} />)
      )} */}
      {DUMMY_DATA.map((article) => (
        <ArticleCard key={article.articleId} article={article} />
      ))}
    </div>
  );
}
