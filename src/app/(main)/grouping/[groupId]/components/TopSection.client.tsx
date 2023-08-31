'use client';
import { useDeleteScrap, useGetGroupDetail, usePostScrap } from '@/apis/groups';
import { IconButton } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useShowMore } from '@/hooks/useShowMore';
import Image from 'next/image';
import { useState } from 'react';

export default function TopSection() {
  const [isScrap, setIsScrap] = useState(false);
  const { groupId } = useNumberParams<['groupId']>();
  const { contentRef, toggleShowFullText, shouldShowButton, showFullText } = useShowMore({
    maxLines: 6,
  });

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { mutate: mutatePostScrap } = usePostScrap(groupId);
  const { mutate: mutateDeleteScrap } = useDeleteScrap(groupId);
  const { imageUrl, fileUrl, title, content } = groupDetailData;

  const handleScrapClick = () => {
    if (isScrap) {
      mutateDeleteScrap();
    } else {
      mutatePostScrap();
    }

    setIsScrap((prev) => !prev);
  };

  return (
    <section>
      <div className="relative aspect-[8/5]">
        <Image
          src={fileUrl || imageUrl || '/images/dummy_image.png'}
          alt="thumbnail"
          className="object-cover"
          fill
        />
        <IconButton
          size="medium"
          className="absolute bottom-20 right-20 z-10 rounded-full bg-white bg-opacity-[.38]"
          onClick={handleScrapClick}
        >
          <Image
            src={`/icons/24/bookmark_${isScrap ? 'filled' : 'outline'}.svg`}
            alt="bookmark"
            width={24}
            height={24}
          />
        </IconButton>
      </div>
      <Spacing size={24} />
      <div className="px-20">
        <h4 className="text-h4 text-sign-cto">{title}</h4>
        <Spacing size={8} />
        <div ref={contentRef} className="text-paragraph-2 text-sign-secondary">
          {showFullText ? content : content.split('\n').slice(0, 6).join('\n')}
        </div>
        <Spacing size={4} />
        {shouldShowButton && (
          <button
            className="p-2 text-subtitle-2 text-sign-sub"
            onClick={() => toggleShowFullText()}
          >
            {showFullText ? '접기' : '더보기'}
          </button>
        )}
      </div>
      <Spacing size={20} />
    </section>
  );
}
