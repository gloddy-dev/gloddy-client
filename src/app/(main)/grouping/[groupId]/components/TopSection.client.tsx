'use client';
import { useGetGroupDetail } from '@/apis/groups';
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
  const { imageUrl, title, content } = groupDetailData;

  return (
    <section>
      <div className="relative aspect-[8/5]">
        <Image src={imageUrl ?? '/images/dummy_image.png'} alt="thumbnail" fill />
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
