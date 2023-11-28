'use client';

import { Notification, NotificationResponse } from '@/apis/notifications';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import useAppRouter from '@/hooks/useAppRouter';
import { useNotificationRoute } from '@/hooks/useNotificationRoute';
import cn from '@/utils/cn';
import { getNotificationPath } from '@/utils/getNotificationPath';
import { format, formatDistanceToNowStrict } from 'date-fns';
import { enUS, ko } from 'date-fns/esm/locale';
import Image from 'next/image';

function foramtDate(locale: Locale, date: string) {
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
  const { userId, redirectId, content, type } = notiData;
  const { i18n } = useTranslation('common');
  const { push } = useAppRouter();

  const locale = i18n.language === 'ko' ? ko : enUS;
  const path = getNotificationPath(type, redirectId);

  return (
    <Flex
      align="center"
      className={cn('px-20 py-16', {
        // 'bg-brand-color': !isRead,
      })}
      onClick={() => push(path)}
    >
      {/* <div className="relative h-48 w-48 overflow-hidden rounded-8">
        <Image src={imageUrl} alt="thumbnail" className="object-cover" fill />
      </div> */}
      <Spacing direction="horizontal" size={16} />
      <div>
        <p className="text-paragraph-2 text-sign-secondary">{content}</p>
        <Flex align="center" gap={4}>
          {/* <Icon id="16-date_range" width={16} height={16} /> */}
          {/* <p className="text-caption text-sign-tertiary">{foramtDate(locale, date)}</p> */}
        </Flex>
      </div>
    </Flex>
  );
}
