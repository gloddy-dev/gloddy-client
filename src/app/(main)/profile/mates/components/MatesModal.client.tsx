import { Mate } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';

interface MatesModalProps {
  mateData: Mate;
  close: () => void;
}
export default function MatesModal({ mateData, close }: MatesModalProps) {
  const { mateName, mateImageUrl } = mateData;

  const handleDelete = () => {};

  return (
    <Modal variant="warning" onCancelClick={close} onOkClick={handleDelete}>
      <Spacing size={32} />
      <Avatar imageUrl={mateImageUrl} size="large" />
      <Spacing size={8} />
      <p>
        <h4 className="inline text-h4">{mateName}</h4>
        <span className="text-subtitle-2">님의</span>
      </p>
      <Spacing size={2} />
      <p className="text-subtitle-2">후기를 삭제하시겠어요?</p>
      <Spacing size={16} />
    </Modal>
  );
}
