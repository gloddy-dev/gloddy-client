import { Avatar } from '../Avatar';
import { Spacing } from '../common/Spacing';
import { Flex } from '../Layout';
import Image from 'next/image';

import type { ReliabilityType } from '@/types';

interface CardHeaderProps {
  userImageUrl: string;
  name: string;
  date: string;
  isWriterCertifiedStudent: boolean;
  isWriterCaptain: boolean;
  writerReliabilityLevel: ReliabilityType;
  showMoreIcon?: boolean;
  onMoreClick?: () => void;
}

export default function CardHeader({
  userImageUrl,
  name,
  date,
  isWriterCertifiedStudent,
  isWriterCaptain,
  writerReliabilityLevel,
  showMoreIcon = false,
  onMoreClick,
}: CardHeaderProps) {
  return (
    <Flex align="center" className="gap-12 pb-4 pt-6">
      <Avatar
        imageUrl={userImageUrl}
        size="small"
        iconVariant={isWriterCertifiedStudent ? 'education' : 'none'}
      />
      <div className="grow overflow-hidden">
        <Flex align="center">
          <p className="truncate text-paragraph-2 text-sign-secondary">{name}</p>
          <Spacing size={2} direction="horizontal" />
          {isWriterCaptain && <Image src="/icons/16/host.svg" alt="host" width={16} height={16} />}

          <Image
            src={`/icons/16/reliability/${writerReliabilityLevel.toLowerCase()}.svg`}
            alt="writerReliabilityLevel"
            width={16}
            height={16}
          />
        </Flex>
        <p className="text-caption text-sign-tertiary">{date}</p>
      </div>
      {showMoreIcon && (
        <Image
          src="/icons/24/more_secondary.svg"
          alt="more"
          width={24}
          height={24}
          onClick={onMoreClick}
        />
      )}
    </Flex>
  );
}
