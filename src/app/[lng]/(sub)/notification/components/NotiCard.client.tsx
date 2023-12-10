'use client';

import { Notification, NotificationResponse } from '@/apis/notifications';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import useAppRouter from '@/hooks/useAppRouter';
import cn from '@/utils/cn';
import { getNotificationPath } from '@/utils/getNotificationPath';
import { format, formatDistanceToNowStrict } from 'date-fns';
import { enUS, ko } from 'date-fns/esm/locale';
import Image from 'next/image';

function formatDate(locale: Locale, date: string) {
  const notiDate = new Date(date);
  const now = Date.now();
  const diff = (now - notiDate.getTime()) / 1000;
  if (diff < 60 * 1) {
    return locale.code === 'ko' ? '방금 전' : 'just now';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNowStrict(notiDate, { addSuffix: true, locale });
  }
  return format(notiDate, locale.code === 'ko' ? 'yyyy년 MM월 dd일' : 'dd MMM yyyy');
}

interface NotiCardProps {
  notiData: Notification;
}

export default function NotiCard({ notiData }: NotiCardProps) {
  const { userId, redirectId, content, type, image, createdAt, title } = notiData;
  const { i18n } = useTranslation('common');
  const { push } = useAppRouter();

  const locale = i18n.language === 'ko' ? ko : enUS;
  const path = getNotificationPath(type, redirectId);

  return (
    <Flex align="center" className={cn('px-20 py-16')} onClick={() => push(path)}>
      <div className="w-full">
        <p className="text-paragraph-2 font-bold text-sign-secondary">{title}</p>

        <Spacing size={2} />
        <p className="text-paragraph-2 text-sign-tertiary">{content}</p>
        <Spacing size={8} />
        <Flex align="center" gap={4}>
          <Icon id="16-date_range" width={16} height={16} />
          <p className="text-caption text-sign-tertiary">{formatDate(locale, createdAt)}</p>
        </Flex>
      </div>

      <Spacing size={16} direction="horizontal" />

      <div className="relative flex h-48 w-48 items-center justify-center rounded-4">
        <Image
          src={image || '/images/approve_character.png'}
          alt="thumbnail"
          width={48}
          height={48}
          layout="responsive"
          className="rounded-4"
        />
      </div>
    </Flex>
  );
}
