'use client';

import { Button } from '@/components/Button';
import { CircleCheckbox } from '@/components/common/Checkbox';
import { Spacing } from '@/components/common/Spacing';
import { BottomSheet } from '@/components/Modal';
import { useModals } from '@/hooks/useModals';
import { useEffect, useState } from 'react';

type AgreeCheckListType = {
  name: string;
  required: boolean;
  isAgreed: boolean;
};

const defaultAgreeCheckList = [
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
];

export default function AgreeSection() {
  const { isOpen, openModal, closeModal } = useModals<'modal'>();
  const [agreeCheckList, setAgreeCheckList] = useState<AgreeCheckListType[]>(defaultAgreeCheckList);

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
      text={<div className="text-subtitle-1">약관 동의</div>}
      isRightButton
    >
      <section className="rounded-12 border-1 border-border-default">
        <div
          className="flex h-48 items-center gap-8 px-8"
          onClick={() => handleAgreeAllCheckList()}
        >
          <CircleCheckbox checked={agreeCheckList.every((agree) => agree.isAgreed)} />
          <p className="text-subtitle-2 text-sign-secondary">전체동의</p>
        </div>

        {agreeCheckList.map((agree) => (
          <div
            key={agree.name}
            className="flex h-40 items-center gap-8 bg-sub px-8 text-paragraph-2 text-sign-secondary"
            onClick={() => handleAgreeCheckList(agree.name)}
          >
            <CircleCheckbox key={agree.name} checked={agree.isAgreed} variant="outline" />
            <p className="">
              <span className="text-sign-tertiary">{agree.required && '(필수) '}</span>
              {agree.name}
            </p>
          </div>
        ))}
      </section>

      <Spacing size={30} />

      <Button
        disabled={agreeCheckList.some((checkItem) => checkItem.required && !checkItem.isAgreed)}
        onClick={closeModal}
      >
        완료
      </Button>
    </BottomSheet>
  );
}
