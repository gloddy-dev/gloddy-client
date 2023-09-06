import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FeedbackOutModalProps {
  onClose: () => void;
}
export default function FeedbackOutModal({ onClose }: FeedbackOutModalProps) {
  const router = useRouter();

  return (
    <Modal variant="warning" onOkClick={() => router.back()} onCancelClick={onClose}>
      <Spacing size={28} />
      <div className="py-15">
        <Image src="/images/refuse_character.png" width={130} height={130} alt="refuse" />
      </div>
      <Spacing size={8} />
      <p className="text-paragraph-1 text-sign-tertiary">
        멤버 평가는 앞으로의 매칭에
        <br />
        많은 도움이 됩니다!
      </p>
      <Spacing size={12} />
      <p>정말 안 해주실 건가요? 🥹</p>
      <Spacing size={16} />
    </Modal>
  );
}
