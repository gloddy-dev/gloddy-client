import { ko } from 'date-fns/locale';
import Image from 'next/image';

import { Chat } from './dummy';

import type { HTMLAttributes, PropsWithChildren } from 'react';

import ImageSample from '@/components/Image/ImageSample';
import { Flex } from '@/components/Layout';
import { NavLink } from '@/components/NavLink';
import { Spacing } from '@/components/Spacing';
import cn from '@/utils/cn';
import { formatDate } from '@/utils/formatDate';

interface ChatCardProps extends HTMLAttributes<HTMLDivElement> {
  chatData: Chat;
}

export default function ChatCard({ chatData, children }: PropsWithChildren<ChatCardProps>) {
  const { title, content, imageUrl, newMessag, groupId, latestMessageTiem } = chatData;

  return (
    <Flex className="bg-white px-20 py-12" direction="column">
      <NavLink href={`/grouping/detail/${groupId}?tab=chat`} className="flex items-center">
        <section className="relative h-60 w-60 shrink-0">
          {imageUrl ? (
            <Image
              fill
              src={imageUrl}
              alt="group"
              className="rounded-8 object-cover"
              loading="lazy"
              sizes="32px"
            />
          ) : (
            <ImageSample width={96} height={96} />
          )}
        </section>

        <Spacing size={12} direction="horizontal" />

        <section className="relative grow overflow-hidden  ">
          <Flex justify="between" direction="row">
            <Flex align="start" direction="column">
              <p className="text-subtitle-2 grow truncate">{title}</p>
              <p className="text-paragraph-2 text-sign-tertiary truncate">{content}</p>
            </Flex>
            <Flex align="end" justify="between" direction="column">
              <p className="text-paragraph-2 text-sign-caption truncate">
                {formatDate(latestMessageTiem, ko)}
              </p>
              {newMessag && (
                <div className="text-paragraph-2 text-sign-white flex h-20 w-20 items-center justify-center rounded-full bg-red-400">
                  {newMessag}
                </div>
              )}
            </Flex>
          </Flex>
        </section>
      </NavLink>
      {children}
    </Flex>
  );
}
