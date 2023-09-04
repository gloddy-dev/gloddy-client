import DeleteCompleteModal from './DeleteCompleteModal.client';
import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

interface DeleteModalProps {
  onCancelClick: () => void;
}

export default function DeleteModal({ onCancelClick }: DeleteModalProps) {
  const { open } = useModal();

  return (
    <Modal
      variant="warning"
      onCancelClick={onCancelClick}
      onOkClick={() => open(<DeleteCompleteModal />)}
    >
      <Spacing size={32} />
      <Image src="/icons/48/warning.svg" width={48} height={48} alt="warning" />
      <Spacing size={12} />
      <p className="text-subtitle-1">정말 탈퇴하시겠어요?</p>
      <Spacing size={4} />
      <p className="text-paragraph-1 text-sign-tertiary">
        게정을 삭제하면
        <br />
        모든 활동 정보가 삭제되며
        <br />
        복구할 수 없습니다.
      </p>
    </Modal>
  );
}
