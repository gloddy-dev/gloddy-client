import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { useRouter } from 'next/navigation';

interface RejectModalProps {
  applyId: number;
}

export default function RejectModal({ applyId }: RejectModalProps) {
  const router = useRouter();

  return (
    <Modal>
      <Spacing size={36} />
      <h4 className="text-h4 text-sign-primary">Let’s go for a walk!</h4>
      <p className="text-subtitle-1 text-sign-primary">아쉽지만 모임에 반려되었습니다</p>
      <Spacing size={12} />
      <p className="text-paragraph-1 text-sign-tertiary">
        다른 재밌는 모임 활동들이
        <br />
        회원님을 기다리고 있어요!
      </p>
      <Spacing size={20} />
      <div className="py-12">
        <Button onClick={() => router.back()}>다른 모임 지원하러 가기</Button>
      </div>
    </Modal>
  );
}
