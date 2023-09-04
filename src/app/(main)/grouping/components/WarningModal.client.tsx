import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { Modal } from '@/components/Modal';
import Image from 'next/image';

interface WarningModalProps {
  content: string | React.ReactNode;
  description?: string | React.ReactNode;
  onOkClick: () => void;
  okDisabled?: boolean;
  onCancelClick: () => void;
}

export default function WarningModal({
  content,
  description,
  onOkClick,
  okDisabled,
  onCancelClick,
}: WarningModalProps) {
  return (
    <Modal
      variant="warning"
      onCancelClick={onCancelClick}
      onOkClick={onOkClick}
      okDisabled={okDisabled}
    >
      <Spacing size={32} />
      <Image src="/icons/48/warning.svg" alt="warning" width={48} height={48} />
      <Spacing size={12} />
      <Flex direction="column" justify="center" align="center" className="gap-4">
        <div>{content}</div>
        {description && <div>{description}</div>}
      </Flex>
      <Spacing size={16} />
    </Modal>
  );
}
