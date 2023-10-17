'use client';

import { Avatar } from '@/components/Avatar';
import { Modal, ModalProps } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface NoShowModalProps extends ModalProps {
  name: string;
  imageUrl: string;
}
export default function NoShowModal({ name, imageUrl, ...props }: NoShowModalProps) {
  return (
    <Modal variant="warning" {...props} className="text-subtitle-2">
      <Spacing size={32} />
      <Avatar imageUrl={imageUrl} size="large" />
      <Spacing size={8} />
      <p>
        <span className="text-h4">{name}</span>님이
      </p>
      <p>모임에 불참하셨나요?</p>
      <Spacing size={16} />
    </Modal>
  );
}
