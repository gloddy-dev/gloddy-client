import { Mate, useDeleteMate } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

export interface MatesDeleteModalProps {
  mateData: Mate;
  onCloseModal: () => void;
  onCloseBottomSheet: () => void;
}
export default function MatesModal({
  mateData,
  onCloseModal,
  onCloseBottomSheet,
}: MatesDeleteModalProps) {
  const { mateName, mateImageUrl, mateId } = mateData;
  const { mutate: mutateDeleteMate } = useDeleteMate({
    onSuccess: () => {
      onCloseModal();
      onCloseBottomSheet();
    },
  });

  const handleDelete = () => {
    mutateDeleteMate(mateId);
  };

  return (
    <Modal variant="warning" onCancelClick={onCloseModal} onOkClick={handleDelete}>
      <Spacing size={32} />
      <Avatar imageUrl={mateImageUrl} size="large" />
      <Spacing size={8} />
      <p>
        <span className="inline text-h4">{mateName}</span>
        <span className="text-subtitle-2">님의</span>
      </p>
      <Spacing size={2} />
      <p className="text-subtitle-2">후기를 삭제하시겠어요?</p>
      <Spacing size={16} />
    </Modal>
  );
}
