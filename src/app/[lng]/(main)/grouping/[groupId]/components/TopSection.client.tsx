'use client';
import { useDeleteScrapGroups, useGetGroupDetail, usePostScrap } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { ImageModal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useShowMore } from '@/hooks/useShowMore';
import Image from 'next/image';

export default function TopSection() {
  const { t } = useTranslation('groupDetail');
  const { groupId } = useNumberParams<['groupId']>();
  const { open, exit } = useModal();
  const { contentRef, toggleShowFullText, shouldShowButton, showFullText } = useShowMore({
    maxLines: 6,
  });

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { mutate: mutatePostScrap } = usePostScrap(groupId);
  const { mutate: mutateDeleteScrap } = useDeleteScrapGroups(groupId);
  const { imageUrl, fileUrl, isScraped, title, content } = groupDetailData;

  const handleScrapClick = () => {
    if (isScraped) {
      mutateDeleteScrap({ params: { groupId } });
    } else {
      mutatePostScrap({ params: { groupId } });
    }
  };

  return (
    <section>
      <div className="relative aspect-[8/5]">
        <Image
          src={fileUrl || imageUrl || '/images/dummy_image.png'}
          alt="thumbnail"
          className="object-cover"
          onClick={() =>
            open(() => (
              <ImageModal
                images={[fileUrl || imageUrl]}
                currentImage={fileUrl || imageUrl}
                onClose={exit}
              />
            ))
          }
          fill
        />
        <IconButton
          size="medium"
          className="absolute bottom-20 right-20 z-10 rounded-full bg-black bg-opacity-[.38]"
          onClick={handleScrapClick}
        >
          <Icon id={`24-scrap_${isScraped ? 'filled' : 'outline'}`} />
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
            {t(showFullText ? 'fold' : 'more')}
          </button>
        )}
      </div>
      <Spacing size={20} />
    </section>
  );
}
