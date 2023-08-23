import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import Image from 'next/image';

interface ArticleItemModalProps {
  onOkClick: () => void;
  onCancelClick: () => void;
}

export default function ArticleItemModal({ onOkClick, onCancelClick }: ArticleItemModalProps) {
  return (
    <Modal variant="warning" onCancelClick={onCancelClick} onOkClick={onOkClick}>
      <Spacing size={32} />
      <Image src="/icons/48/warning.svg" alt="warning" width={48} height={48} />
      <Spacing size={12} />
      <p>해당 게시글을 삭제하시겠습니까?</p>
      <Spacing size={16} />
    </Modal>
  );
}
