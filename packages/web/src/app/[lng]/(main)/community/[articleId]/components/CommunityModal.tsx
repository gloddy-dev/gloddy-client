import { Icon } from '@/components/Icon';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface BlockDoneModalProps {
    message: string;
    variant: 'warning' | 'success' | 'ok';
    onOkClick: () => void;
    onCancelClick: () => void;
}

export default function CommunityModal({ onOkClick, onCancelClick, message, variant}: BlockDoneModalProps) {
  return (
    <Modal variant={variant} onOkClick={onOkClick} onCancelClick={onCancelClick}>
      <Spacing size={32} />
      <Icon id={'48-warning'} width={48} height={48} />
      <Spacing size={12} />
      <p>{message}</p>
      <Spacing size={20} />
    </Modal>
  );
}
