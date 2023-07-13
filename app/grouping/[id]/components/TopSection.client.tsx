'use client';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';

interface TopSectionProps {
  thumbnailUrl: string;
  title: string;
  description: string;
  bookmarked?: boolean;
  isLeader?: boolean;
}

export default function TopSection({
  title,
  thumbnailUrl,
  description,
  bookmarked = false,
  isLeader = false,
}: TopSectionProps) {
  const handlBookmarkClick = () => {};

  return (
    <section>
      <div className="relative h-350">
        <Image src={thumbnailUrl} alt="thumbnail" className="w-full rounded-b-35" fill />
        {isLeader ? (
          <Image
            src="/assets/check_mark.svg"
            alt="leader"
            width={32}
            height={32}
            className="absolute -bottom-16 right-20"
          />
        ) : (
          <Image
            src={bookmarked ? '/assets/bookmark_fill.svg' : '/assets/bookmark.svg'}
            alt="bookmark"
            width={50}
            height={50}
            className="absolute -bottom-25 right-9 cursor-pointer"
            onClick={handlBookmarkClick}
          />
        )}
      </div>
      <div className="p-20">
        <Spacing size={16} />
        <h1 className="text-18 font-700 text-gray">{title}</h1>
        <Spacing size={8} />
        <p className="text-12 font-400 text-gray2">{description}</p>
      </div>
    </section>
  );
}
