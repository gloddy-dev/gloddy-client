import { format, parseISO } from 'date-fns';

import { Reply } from '@/apis/community';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { CardHeader } from '@/components/Card';
import { DropDown } from '@/components/DropDown';
import { DropDownOptionType } from '@/components/DropDown/DropDown';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import cn from '@/utils/cn';

interface ReplyItemProps {
  reply: Reply;
  articleWriterId: number;
}

export default function ReplyItem({ reply, articleWriterId }: ReplyItemProps) {
  const { t } = useTranslation('community');
  const {
    content,
    id: replyId,
    createdAt,
    isLiked,
    likeCount,
    commentCount,
    userId,
    articleId,
    updatedAt,
    isWriter,
  } = reply.childComment;
  const {
    profileImage,
    isCertifiedStudent,
    reliabilityLevel,
    id: writerId,
    nickName,
    countryName,
    countryImage,
  } = reply.writer;

  const handleBlockArticle = () => {
    console.log('block');
  };

  const options: DropDownOptionType[] = [
    {
      name: t('comment.block.label'),
      onClick: handleBlockArticle,
    },
  ];

  return (
    <div className={'w-full bg-sub'}>
      <Flex direction={'row'} className=" m-20 px-4" gap={10}>
        <Icon id={'24-arrow_back'} className={'mt-15 -rotate-45 text-black'} />
        <Flex direction="column" className={'w-full'}>
          <CardHeader
            date={format(parseISO(createdAt), 'yyyy.MM.dd HH:mm')}
            isWriterCertifiedStudent={isCertifiedStudent}
            writerReliabilityLevel={reliabilityLevel}
            userImageUrl={profileImage}
            userId={userId}
            name={nickName}
            isWriterCaptain={articleWriterId === userId}
            countryImage={countryImage}
          >
            <DropDown options={options}>
              <IconButton size="large">
                <Icon id="24-more_secondary" />
              </IconButton>
            </DropDown>
          </CardHeader>
          <Spacing size={10} />
          <div className="break-all text-paragraph-2 text-sign-primary">{content}</div>
          <Flex align="center" className="gap-4">
            <Icon
              id="16-favorite_fill"
              className={cn(isLiked ? 'text-warning' : 'text-sign-caption')}
              width={16}
              height={16}
            />
            <p className={cn(isLiked ? 'text-warning' : 'text-sign-caption') + ' text-subtitle-3'}>
              {likeCount.toString().padStart(2, '0')}
            </p>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
