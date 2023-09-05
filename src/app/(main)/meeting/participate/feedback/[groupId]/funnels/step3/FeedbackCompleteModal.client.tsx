import { Spacing } from '@/components/Spacing';
import { Modal } from '@/components/Modal';

export default function FeedbackCompleteModal() {
  return (
    <Modal variant="ok" okMessage="확인">
      <Spacing size={36} />
      <h4 className="text-h4">Let’s go for a walk!</h4>
      <p className="text-subtitle-1">모임 평가를 완료했습니다.</p>
      <Spacing size={12} />
      <p className="text-paragraph-1 text-sign-tertiary">
        다른 재미있는 모임이
        <br />
        회원님을 기다리고 있어요!
      </p>
      <Spacing size={20} />
    </Modal>
  );
}
