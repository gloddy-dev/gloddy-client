import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import Image from 'next/image';

const modalText = {
  accept: {
    description: '서로에 대한 존중으로\n건전한 모임 문화를 만들어요!',
    content: '지원서를 승인하시겠어요?',
    variant: 'success',
  },
  reject: {
    description: '성급한 거절로\n적합한 지원자를 놓칠 수 있어요',
    content: '지원서를 거절하시겠어요?',
    variant: 'warning',
  },
} as const;

interface ManageModalProps {
  type: 'accept' | 'reject';
  onOkClick: () => void;
  onCancelClick: () => void;
}

export default function ManageModal({ type, onOkClick, onCancelClick }: ManageModalProps) {
  const { description, content, variant } = modalText[type];

  return (
    <Modal variant={variant} onOkClick={onOkClick} onCancelClick={onCancelClick}>
      <Spacing size={32} />
      <Image src="/images/reject_character.png" alt="refuse_character" width={130} height={130} />
      <Spacing size={22} />
      <p className="text-paragraph-1 text-sign-tertiary">{description}</p>
      <Spacing size={12} />
      <p>{content}</p>
      <Spacing size={16} />
    </Modal>
  );
}
