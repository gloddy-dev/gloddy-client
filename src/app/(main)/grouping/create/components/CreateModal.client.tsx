import { Spacing } from '@/components/Spacing';
import { Icon } from '@/components/Icon';
import { Modal } from '@/components/Modal';

interface CreateModalProps {
  onOkClick: () => void;
  onCancelClick: () => void;
  okDisabled?: boolean;
}

export default function CreateModal({ onOkClick, onCancelClick, okDisabled }: CreateModalProps) {
  return (
    <Modal
      variant="warning"
      onOkClick={onOkClick}
      onCancelClick={onCancelClick}
      okDisabled={okDisabled}
    >
      <Spacing size={32} />
      <Icon id="48-warning" width={48} height={48} />
      <Spacing size={12} />
      <div>
        모임 개설 후 수정 및 삭제가 불가합니다.
        <br />
        계속하시겠어요?
      </div>
      <Spacing size={16} />
    </Modal>
  );
}
