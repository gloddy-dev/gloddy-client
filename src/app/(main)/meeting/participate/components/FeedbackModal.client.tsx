'use client';
import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FeedbackModalProps {
  onClose: () => void;
}
export default function FeedbackModal({ onClose }: FeedbackModalProps) {
  const router = useRouter();
  return (
    <Modal
      variant="success"
      okText="이동하기"
      cancelText="취소"
      onCancelClick={onClose}
      onOkClick={() => router.push('/meeting/participate/feedback')}
    >
      <Spacing size={28} />
      <Image src="/images/approve_character.png" width={130} height={130} alt="approve" />
      <p className="text-paragraph-1 text-sign-tertiary">모임은 즐거우셨나요?</p>
      <p className="text-subtitle-1 text-sign-primary">함께했던 멤버들을 칭찬해주세요!</p>
    </Modal>
  );
}
