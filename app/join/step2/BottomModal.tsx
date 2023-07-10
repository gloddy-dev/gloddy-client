'use client';
import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import { useModal } from '@/hooks/useModal';

type AgreeCheckListType = {
  name: string;
  required: boolean;
  isAgreed: boolean;
};

export default function BottomModal() {
  const { isModalOpen, openModal, closeModal } = useModal<'modal'>();
  const [agreeCheckList, setAgreeCheckList] = useState<AgreeCheckListType[]>([
    {
      name: '서비스 이용약관 동의',
      required: true,
      isAgreed: false,
    },
    {
      name: '개인정보 수집 및 이용 동의',
      required: true,
      isAgreed: false,
    },
  ]);

  useEffect(() => {
    openModal('modal');
  }, [openModal]);

  const handleAgreeAllCheckList = () => {
    setAgreeCheckList((agreeCheckList) =>
      agreeCheckList.map((agree) => ({
        ...agree,
        isAgreed: !agreeCheckList.every((agree) => agree.isAgreed),
      }))
    );
  };

  const handleAgreeCheckList = (name: string) => {
    setAgreeCheckList((prev) =>
      prev.map((prevAgree) =>
        prevAgree.name === name ? { ...prevAgree, isAgreed: !prevAgree.isAgreed } : prevAgree
      )
    );
  };

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
          checked={agreeCheckList.every((agree) => agree.isAgreed)}
          onClick={() => handleAgreeAllCheckList()}
        />
        <div className="my-15 border-[0.5px] border-white3" />
        {agreeCheckList.map((agree) => (
          <CircleCheckbox
            key={agree.name}
            text={
              <p>
                <span className="text-12 text-gray3">{agree.required && '(필수)'}</span>
                <span className="text-12">{agree.name}</span>
              </p>
            }
            checked={agree.isAgreed}
            onClick={() => handleAgreeCheckList(agree.name)}
          />
        ))}
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
