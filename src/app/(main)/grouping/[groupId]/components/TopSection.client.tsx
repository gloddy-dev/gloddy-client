'use client';
import { useDeleteScrap, useGetGroupDetail, usePostScrap } from '@/apis/groups';
import { IconButton } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useShowMore } from '@/hooks/useShowMore';
import Image from 'next/image';

export default function TopSection() {
  const { groupId } = useNumberParams<['groupId']>();
  const { contentRef, toggleShowFullText, shouldShowButton, showFullText } = useShowMore({
    maxLines: 6,
  });

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { mutate: mutatePostScrap } = usePostScrap(groupId);
  const { mutate: mutateDeleteScrap } = useDeleteScrap(groupId);
  const { imageUrl, fileUrl, isScraped, title, content } = groupDetailData;

  const handleScrapClick = () => {
    if (isScraped) {
      mutateDeleteScrap();
    } else {
      mutatePostScrap();
    }
    console.log(isScraped);
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
            src={`/icons/24/bookmark_${isScraped ? 'filled' : 'outline'}.svg`}
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
        <div className="overflow-hidden">
          <div
            ref={contentRef}
            className="overflow-hidden break-words text-paragraph-2 text-sign-secondary"
          >
            {showFullText ? content : content.split('\n').slice(0, 6).join('\n')}
          </div>
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
