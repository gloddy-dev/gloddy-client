import { useJoinContext } from '../../../components/JoinContext.client';
import { formatNumber, formatNumberBackSpace } from '../util';
import { useLoginMutation, useSMSMutation } from '@/apis/auth';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { Toast } from '@/components/Modal';
import { useTimerContext } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useModal } from '@/hooks/useModal';
import { useRouter } from 'next/navigation';
import { ElementType, KeyboardEventHandler } from 'react';

import type { SignUpState } from '../../../type';
import type { StatusType } from '../type';
import type { SubmitHandler } from 'react-hook-form';

interface NumberSectionProps {
  inputStatus: StatusType;
  setInputStatus: React.Dispatch<React.SetStateAction<StatusType>>;
}

export default function NumberForm({ inputStatus, setInputStatus }: NumberSectionProps) {
  const { t } = useTranslation('join');
  const hookForm = useJoinContext();
  const { setValue, handleSubmit, register, formState } = hookForm;
  const { mutate: mutateSMS } = useSMSMutation();
  const { start: timerStart, status: timerStatus } = useTimerContext();
  const { open: openToast } = useModal({ delay: 2000 });

  const handleInputChange = (e: any): any => {
    const phoneNumber = e.currentTarget.value.replace(/[^0-9-]/g, '');
    const phoneNumberWithoutHyphen = phoneNumber.replace(/-/g, '');

    if ('key' in e && e.key === 'Backspace') {
      setValue('phoneNumber', formatNumberBackSpace(phoneNumberWithoutHyphen));
    } else {
      setValue('phoneNumber', formatNumber(phoneNumberWithoutHyphen));
    }
  };

  const onSubmit: SubmitHandler<Pick<SignUpState, 'phoneNumber'>> = (data) => {
    if (timerStatus === 'RUNNING') return;
    timerStart();
    const phoneNumberWithoutHyphen = data.phoneNumber.replace(/[-\s]/g, '');
    mutateSMS(
      { number: phoneNumberWithoutHyphen },
      {
        onSuccess: () => {
          openToast(() => <Toast>인증 번호가 전송되었습니다.</Toast>);
          setInputStatus('afterSend');
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Spacing size={8} />
      <TextFieldController
        label={t('phoneNumber')}
        register={register('phoneNumber', {
          required: true,
          pattern: {
            value: regexr.phoneNumber,
            message: t('* 휴대폰 번호를 다시 확인해주세요.'),
          },
        })}
        onChange={handleInputChange}
        onKeyDown={handleInputChange as unknown as KeyboardEventHandler<ElementType<any>>}
        maxLength={13}
        hookForm={hookForm}
        placeholder="010-0000-0000"
        isSpacing={false}
        readOnly={inputStatus === 'afterSend'}
        isLeftCaptionWrap={false}
        type="tel"
        inputMode="tel"
      />

      <Spacing size={8} />
      {inputStatus === 'beforeSend' && (
        <ButtonGroup isSpacing={false}>
          <Button disabled={!formState.isValid || timerStatus === 'RUNNING'} type="submit">
            {t('sendVerificationCode')}
          </Button>
        </ButtonGroup>
      )}
    </form>
  );
}
