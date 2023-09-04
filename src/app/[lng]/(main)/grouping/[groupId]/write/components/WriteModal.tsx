import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import Image from 'next/image';
import { ComponentProps } from 'react';

type ModalStyle = {
  [key in WriteModalProps['type']]: {
    variant: NonNullable<ComponentProps<typeof Modal>['variant']>;
    icon: string;
    content: string;
  };
};

const modalStyle: ModalStyle = {
  write: {
    variant: 'success',
    icon: '/icons/48/check.svg',
    content: '게시글을 등록하시겠습니까?',
  },
  cancel: {
    variant: 'warning',
    icon: '/icons/48/warning.svg',
    content: '게시글 작성을 취소하시겠습니까?',
  },
};

interface WriteModalProps {
  type: 'write' | 'cancel';
  onOkClick: () => void;
  onCancelClick: () => void;
}

export default function WriteModal({ type, onCancelClick, onOkClick }: WriteModalProps) {
  const { variant, icon, content } = modalStyle[type];

  return (
    <Modal variant={variant} onCancelClick={onCancelClick} onOkClick={onOkClick}>
      <Spacing size={32} />
      <Image src={icon} alt={variant} width={48} height={48} />
      <Spacing size={12} />
      <p className="text-paragraph-1">{content}</p>
      <Spacing size={16} />
    </Modal>
  );
}
