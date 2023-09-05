import { Spacing } from '@/components/Spacing';
import { Icon } from '@/components/Icon';
import { Modal, type ModalProps } from '@/components/Modal';

export default function CertificateSkipModal({ ...props }: ModalProps) {
  return (
    <Modal variant="warning" {...props}>
      <Spacing size={32} />
      <Icon id="48-warning" width={48} height={48} />
      <Spacing size={12} />
      <p className="text-subtitle-1">재학생 인증을 건너뛰시겠습니까?</p>
      <Spacing size={4} />
      <p className="text-sign-tertiary">
        회원가입 후 개인 프로필에서
        <br />
        재학생 인증을 진행할 수 있어요.
      </p>
      <Spacing size={16} />
    </Modal>
  );
}
