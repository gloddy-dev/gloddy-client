import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';

interface BlockDoneModalProps {
  onOkClick: () => void;
}
export default function BlockDoneModal({ onOkClick }: BlockDoneModalProps) {
  return (
    <Modal variant="ok" okMessage="확인" onOkClick={onOkClick}>
      <Spacing size={36} />
      <p>차단이 완료되었습니다.</p>
      <Spacing size={20} />
    </Modal>
  );
}
