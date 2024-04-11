import CancelIcon from '@/assets/svgs/48-cancel.svg';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';

interface EmptyProps {
  message: string;
}
export default function Empty({ message }: EmptyProps) {
  return (
    <Flex direction="column" className="py-80 text-center" align="center">
      <CancelIcon />
      <Spacing size={8} />
      <p className="text-subtitle-1 text-sign-tertiary">{message}</p>
    </Flex>
  );
}
