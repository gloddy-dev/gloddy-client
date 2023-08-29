import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import Image from 'next/image';

interface CreateModalProps {
  onOkClick: () => void;
  onCancelClick: () => void;
}

export default function CreateModal({ onOkClick, onCancelClick }: CreateModalProps) {
  return (
    <Modal variant="warning" onOkClick={onOkClick} onCancelClick={onCancelClick}>
      <Spacing size={32} />
      <Image src="/icons/48/warning.svg" width={48} height={48} alt="warning" />
      <Spacing size={12} />
      <p>계속하시겠어요?</p>
      <Spacing size={16} />
    </Modal>
  );
}
