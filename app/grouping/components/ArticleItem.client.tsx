'use client';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import type { Article } from '@/apis/groups/type';

interface ArticleItemProps {
  article: Article;
  isBoardDetail?: boolean;
}

export default function ArticleItem({ article, isBoardDetail = false }: ArticleItemProps) {
  const { name, date, content, commentCount } = article;

  const router = useRouter();
  const pathname = usePathname();

  const handleMoreClick = () => {};
  const handleUserClick = () => {};

  return (
    <div className="rounded-8 bg-white2">
      <div className="p-16">
        <div className="flex">
          <div
            className="relative h-38 w-38 overflow-hidden rounded-full"
            onClick={handleUserClick}
          >
            <Image src="/assets/avatar.svg" alt="avatar" className="object-cover" fill />
          </div>
          <Spacing size={12} direction="horizontal" />
          <div className="flex-grow">
            <div className="flex items-center gap-6">
              <h2 className="text-14 font-700 text-gray">{name}</h2>
            </div>
            <p className="text-10 font-400 text-gray4">{date}</p>
          </div>
          <Image
            src="/assets/more.svg"
            alt="more"
            width={3}
            height={13}
            className="cursor-pointer"
            onClick={handleMoreClick}
          />
        </div>
        <Spacing size={12} />
        <div className="whitespace-pre-line text-12 leading-20 text-gray">{content}</div>
      </div>

      <div className="border-t-1 border-white">
        <div className="flex items-center justify-center gap-8 p-16">
          <Image src="/assets/comment.svg" alt="comment" width={15} height={15} />
          <p
            className="cursor-pointer text-12 text-gray2"
            onClick={() => !isBoardDetail && router.push(`${pathname}/board/${article.articleId}`)}
          >
            {commentCount ? `${commentCount}개` : '댓글쓰기'}
          </p>
        </div>
      </div>
    </div>
  );
}
