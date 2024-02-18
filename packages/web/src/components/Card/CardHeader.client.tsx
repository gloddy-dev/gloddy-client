import { PropsWithChildren } from 'react';

import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { Flex } from '../Layout';
import { Spacing } from '../Spacing';

import type { ReliabilityType } from '@/types';

import { useAppRouter } from '@/hooks';

interface CardHeaderProps {
  userId: number;
  userImageUrl: string;
  name: string;
  date: string;
  isWriterCertifiedStudent: boolean;
  isWriterCaptain?: boolean;
  writerReliabilityLevel: ReliabilityType;
  showMoreIcon?: boolean;
  onMoreClick?: () => void;
  countryImage?: string;
}

export default function CardHeader({
  userId,
  userImageUrl,
  name,
  date,
  isWriterCertifiedStudent,
  isWriterCaptain,
  writerReliabilityLevel,
  showMoreIcon = false,
  onMoreClick,
  children,
  countryImage,
}: PropsWithChildren<CardHeaderProps>) {
  const { push } = useAppRouter();

  return (
    <Flex align="center" className="gap-12 pb-4 pt-6">
      <Avatar
        imageUrl={userImageUrl}
        countryImage={countryImage}
        size="small"
        iconVariant={isWriterCertifiedStudent ? 'education' : 'none'}
        onClick={() => push(`/profile/${userId}`)}
      />
      <div className="grow overflow-hidden">
        <Flex align="center">
          <p className="text-paragraph-2 text-sign-secondary truncate">{name}</p>
          <Spacing size={2} direction="horizontal" />

          {isWriterCaptain && <Icon id="16-host" width={16} height={16} />}
          <Icon
            id={`16-reliability-${writerReliabilityLevel.toLowerCase()}`}
            width={16}
            height={16}
          />
        </Flex>
        <p className="text-caption text-sign-tertiary">{date}</p>
      </div>
      {showMoreIcon && <Icon id="24-more_secondary" onClick={onMoreClick} />}
      {children}
    </Flex>
  );
}
