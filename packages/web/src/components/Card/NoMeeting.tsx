import Icon from '@/components/Icon/Icon';
import Flex from '@/components/Layout/Flex';
import Spacing from '@/components/Spacing/Spacing';

interface NoMeetingProps {
  message: string;
}
export default function NoMeeting({ message }: NoMeetingProps) {
  return (
    <Flex direction="column" className="py-80 text-center" align="center">
      <Icon id="48-cancel" width={48} height={48} />
      <Spacing size={8} />
      <p className="text-subtitle-1 text-sign-tertiary">{message}</p>
    </Flex>
  );
}
