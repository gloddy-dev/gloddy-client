'use client';

import { Button } from '@/components/common/Button';
import { CircleCheckbox } from '@/components/common/Checkbox';
import { BottomSheet } from '@/components/common/Modal';
import { Spacing } from '@/components/common/Spacing';
import { useModals } from '@/hooks/useModals';
import { useEffect, useState } from 'react';

type AgreeCheckListType = {
  name: string;
  required: boolean;
  isAgreed: boolean;
};

export default function BottomModal() {
  const { isOpen, openModal, closeModal } = useModals<'modal'>();
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
    <BottomSheet
      snap={300}
      isOpen={isOpen}
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
        <Spacing size={15} />
        <div className="border-[0.5px] border-white3" />
        <Spacing size={15} />
        <div className="flex flex-col gap-5">
          {agreeCheckList.map((agree) => (
            <CircleCheckbox
              key={agree.name}
              text={
                <p className="text-12">
                  <span className="text-gray3">{agree.required && '(필수)'}</span>
                  {agree.name}
                </p>
              }
              checked={agree.isAgreed}
              onClick={() => handleAgreeCheckList(agree.name)}
            />
          ))}
        </div>
      </section>

      <Spacing size={30} />

      <section>
        <Button
          text="완료"
          disabled={agreeCheckList.some((checkItem) => checkItem.required && !checkItem.isAgreed)}
          onClick={closeModal}
        />
      </section>
    </BottomSheet>
  );
}
