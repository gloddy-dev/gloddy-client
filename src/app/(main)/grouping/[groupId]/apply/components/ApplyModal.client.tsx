import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import Image from 'next/image';

interface ApplyModalProps {
  onOkClick: () => void;
  onCancelClick: () => void;
}
export default function ApplyModal({ onOkClick, onCancelClick }: ApplyModalProps) {
  return (
    <Modal onOkClick={onOkClick} onCancelClick={onCancelClick} variant="success">
      <Spacing size={32} />
      <Image src="/icons/48/check.svg" alt="check" width={48} height={48} />
      <Spacing size={12} />
      <p>지원서를 제출하시겠습니까?</p>
      <Spacing size={4} />
      <p className="text-paragraph-1 text-sign-tertiary">
        지원서를 제출하면
        <br />
        다시 수정할 수 없어요.
      </p>
      <Spacing size={16} />
    </Modal>
  );
}
