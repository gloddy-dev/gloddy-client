import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import Image from 'next/image';

interface DeleteModalProps {
  content: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

export default function DeleteModal({ content, onOkClick, onCancelClick }: DeleteModalProps) {
  return (
    <Modal variant="warning" onCancelClick={onCancelClick} onOkClick={onOkClick}>
      <Spacing size={32} />
      <Image src="/icons/48/warning.svg" alt="warning" width={48} height={48} />
      <Spacing size={12} />
      <p>{content}</p>
      <Spacing size={16} />
    </Modal>
  );
}
