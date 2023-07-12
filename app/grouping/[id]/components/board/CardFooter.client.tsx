'use client';
import Spacing from '@/components/common/Spacing';
import Image from 'next/image';

export default function CardFooter() {
  const handleLikeClick = () => {};

  const handleCommentClick = () => {};

  return (
    <div className="flex h-50 border-t-1 border-white">
      <div className="flex flex-1 items-center justify-center gap-8">
        <Image src="/assets/like.svg" alt="like" width={15} height={15} />
        <p className="cursor-pointer text-12 text-gray2" onClick={handleLikeClick}>
          좋아요
        </p>
      </div>
      <Spacing size={1} direction="horizontal" className="bg-white" />
      <div className="flex flex-1 items-center justify-center gap-8">
        <Image src="/assets/comment.svg" alt="comment" width={15} height={15} />
        <p className="cursor-pointer text-12 text-gray2" onClick={handleCommentClick}>
          댓글쓰기
        </p>
      </div>
    </div>
  );
}
