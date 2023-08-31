import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import Image from 'next/image';

interface NoMeetingProps {
  message: string;
}
export default function NoMeeting({ message }: NoMeetingProps) {
  return (
    <Flex direction="column" className="py-80" align="center">
      <Image src="/icons/48/cancel.svg" width={48} height={48} alt="close" />
      <Spacing size={8} />
      <p className="text-subtitle-1 text-sign-tertiary">{message}</p>
    </Flex>
  );
}
