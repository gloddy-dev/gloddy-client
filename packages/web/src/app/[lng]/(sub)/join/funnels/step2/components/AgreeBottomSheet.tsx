import { useState } from 'react';

import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { BottomSheet } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

type AgreeCheckListType = {
  name: string;
  required: boolean;
  isAgreed: boolean;
};

const defaultAgreeCheckList = [
  {
    name: 'agreeServiceTerms',
    required: true,
    isAgreed: false,
  },
  {
    name: 'agreePrivacyPolicy',
    required: true,
    isAgreed: false,
  },
];

interface AgreeBottomSheetProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function AgreeBottomSheet({ onClose, isOpen }: AgreeBottomSheetProps) {
  const { t } = useTranslation('join');
  const [agreeCheckList, setAgreeCheckList] = useState<AgreeCheckListType[]>(defaultAgreeCheckList);

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
      snapPoints={[300, 0]}
      onClose={onClose}
      title={t('agreeToTerms')}
      disableDrag
      isRightCloseIcon={false}
      isOpen={isOpen}
    >
      <section className="rounded-12 border-1 border-border-default">
        <div
          className="flex h-48 items-center gap-8 px-8"
          onClick={() => handleAgreeAllCheckList()}
        >
          <CircleCheckbox checked={agreeCheckList.every((agree) => agree.isAgreed)} />
          <p className="text-subtitle-2 text-sign-secondary">{t('allAgree')}</p>
        </div>

        {agreeCheckList.map((agree) => (
          <div
            key={agree.name}
            className="bg-sub text-paragraph-2 text-sign-secondary flex h-40 items-center gap-8 px-8"
            onClick={() => handleAgreeCheckList(agree.name)}
          >
            <CircleCheckbox key={agree.name} checked={agree.isAgreed} variant="outline" />
            <p>
              <span className="text-sign-tertiary">
                {agree.required && '(' + t('essential') + ') '}
              </span>
              {t(agree.name)}
            </p>
          </div>
        ))}
      </section>

      <Spacing size={30} />

      <ButtonGroup>
        <Button
          disabled={agreeCheckList.some((checkItem) => checkItem.required && !checkItem.isAgreed)}
          onClick={onClose}
        >
          {t('complete')}
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
