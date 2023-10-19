import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';

interface EmptyProps {
  message?: string;
}
export default function Empty({ message = '게시글이 없습니다.' }: EmptyProps) {
  return (
    <Flex direction="column" className="py-80" align="center">
      <Icon id="48-cancel" width={48} height={48} />
      <Spacing size={8} />
      <p className="text-subtitle-1 text-sign-tertiary">{message}</p>
    </Flex>
  );
}
