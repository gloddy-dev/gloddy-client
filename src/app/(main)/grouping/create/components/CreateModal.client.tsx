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
      <div>
        모임 개설 후 수정 및 삭제가 불가합니다.
        <br />
        계속하시겠어요?
      </div>
      <Spacing size={16} />
    </Modal>
  );
}
