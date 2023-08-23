'use client';

import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import Image from 'next/image';

export default function GroupingModal() {
  return (
    <div>
      <Modal variant="warning">
        <Spacing size={32} />
        <Image src="/icons/48/warning.svg" width={48} height={48} alt="warning" />
        <Spacing size={12} />
        <div>
          모임 개설 후 수정이 불가능합니다.
          <br />
          계속하시겠어요?
        </div>
        <Spacing size={16} />
      </Modal>
    </div>
  );
}
