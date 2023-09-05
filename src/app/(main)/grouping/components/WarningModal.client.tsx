import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

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
      <Icon id="48-warning" width={48} height={48} />
      <Spacing size={12} />
      <Flex direction="column" justify="center" align="center" className="gap-4">
        <div>{content}</div>
        {description && <div>{description}</div>}
      </Flex>
      <Spacing size={16} />
    </Modal>
  );
}
