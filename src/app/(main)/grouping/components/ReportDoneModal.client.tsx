import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface ReportDoneModalProps {
  onOkClick: () => void;
}
export default function ReportDoneModal({ onOkClick }: ReportDoneModalProps) {
  return (
    <Modal variant="ok" okMessage="확인" onOkClick={onOkClick}>
      <Spacing size={36} />
      <p>신고가 접수되었습니다.</p>
      <Spacing size={12} />
      <p className="text-paragraph-1 text-sign-tertiary">빠른 처리를 위해 노력하겠습니다.</p>
      <Spacing size={20} />
    </Modal>
  );
}
