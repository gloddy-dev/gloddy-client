'use client';
import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import { useModal } from '@/hooks/useModal';

interface BottomModalProps {}
export default function BottomModal() {
  const { isModalOpen, openModal, closeModal } = useModal<'modal'>();
  const [agreeCheckList, setAgreeCheckList] = useState<boolean[]>([false, false]);
  useEffect(() => {
    openModal('modal');
  }, [openModal]);

  return (
    <BottomUpModal
      snap={300}
      isModalOpen={isModalOpen}
      onClose={closeModal}
      disableDrag
      text={<div className="text-center font-700">약관 동의</div>}
    >
      <section>
        <CircleCheckbox
          text="전체 동의"
          checked={agreeCheckList[0] && agreeCheckList[1]}
          onClick={() => {
            if (agreeCheckList[0] && agreeCheckList[1]) {
              setAgreeCheckList([false, false]);
            } else {
              setAgreeCheckList([true, true]);
            }
          }}
        />
        <div className="my-15 border-[0.5px] border-white3" />
        <CircleCheckbox
          text={
            <p>
              <span className="text-12 text-gray3">(필수) </span>
              <span className="text-12">서비스 이용약관 동의</span>
            </p>
          }
          checked={agreeCheckList[0]}
          onClick={() => setAgreeCheckList((prev) => [!prev[0], prev[1]])}
        />
        <CircleCheckbox
          text={
            <p>
              <span className="text-12 text-gray3">(필수) </span>
              <span className="text-12">개인정보 취급방침 동의</span>
            </p>
          }
          checked={agreeCheckList[1]}
          onClick={() => setAgreeCheckList((prev) => [prev[0], !prev[1]])}
        />
      </section>

      <div className="h-30" />

      <section>
        <Button
          text="완료"
          disabled={agreeCheckList.some((checkItem) => !checkItem)}
          onClick={closeModal}
        />
      </section>
    </BottomUpModal>
  );
}
