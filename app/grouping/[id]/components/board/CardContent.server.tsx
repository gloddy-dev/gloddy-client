import Spacing from '@/components/common/Spacing';
import Image from 'next/image';

interface CardContentProps {
  content: string;
  likeCount: number;
  commentCount: number;
}

export default function CardContent({ commentCount, likeCount, content }: CardContentProps) {
  return (
    <>
      <div className="whitespace-pre-line text-12 leading-20 text-gray">{content}</div>
      <Spacing size={12} />

      <div className="flex gap-10">
        <div className="flex items-center gap-4">
          <Image src="/assets/like.svg" alt="like" width={9} height={9} />
          <p className="text-10 text-gray2">{likeCount}개</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/assets/comment.svg" alt="comment" width={9} height={9} />
          <p className="text-10 text-gray2">{commentCount}개</p>
        </div>
      </div>
    </>
  );
}
