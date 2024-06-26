import { format } from 'date-fns';

import InputSection from './InputSection';
import SettingSection from './SettingSection';
import UploadSection from './UploadSection';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import CreateModal from '../../components/CreateModal';

import type { CreateGroupContextValue } from '../../type';
import type { TimeType } from '@/types';
import type { SubmitHandler } from 'react-hook-form';

import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { useDidMount } from '@/hooks/common/useDidMount';
import useBrowser from '@/hooks/useBrowser';
import useModal from '@/hooks/useModal/useModal';
import useToast from '@/hooks/useModal/useToast';
import sendMessageToReactNative from '@/utils/sendMessageToReactNative';

function validateDate(date: Date, time: TimeType, browser: string) {
  if (!date || !time.fromHour || !time.fromMin || !time.fromAmPm) {
    return false;
  }
  const formatDateForm = browser === 'safari' ? 'yyyy/MM/dd' : 'yyyy-MM-dd';

  const currentDate = new Date();
  const meetDate = format(date, formatDateForm);
  let meetHour = +time.fromHour + (time.fromAmPm === 'AM' ? 0 : 12);
  if (meetHour === 24) meetHour = 0;
  const meetMinute = +time.fromMin;

  const meetDateObj = new Date(meetDate + ' ' + meetHour + ':' + meetMinute);
  return currentDate < meetDateObj;
}

interface MainStepProps {
  onSelectMeetDate: () => void;
  onCreateSubmit: SubmitHandler<CreateGroupContextValue>;
}

export default function MainStep({ onSelectMeetDate, onCreateSubmit }: MainStepProps) {
  const hookForm = useCreateGroupContext();
  const { handleSubmit, watch, control } = hookForm;
  const browser = useBrowser();

  const { t } = useTranslation('grouping');
  const { open: openCreateModal, exit: exitCreateModal } = useModal();
  const { openToast } = useToast();

  const isAllInput = Object.values(hookForm.watch()).every((value) => {
    if (typeof value === 'object') {
      return Object.values(value).every((v) => !!v);
    }
    return !!value;
  });

  const handleCreateClick = () => {
    if (!validateDate(watch('meetDate'), watch('time'), browser)) {
      openToast(t('create.error.time'));
      return;
    }

    openCreateModal(() => (
      <CreateModal
        onCancelClick={exitCreateModal}
        onOkClick={() => {
          handleSubmit(onCreateSubmit)();
          exitCreateModal();
        }}
      />
    ));
  };

  useDidMount(() => {
    sendMessageToReactNative({
      type: 'GET_PERMISSION',
      data: 'IMAGE',
    });
  });

  return (
    <>
      <UploadSection control={control} />
      <InputSection />
      <Divider thickness="thick" />
      <SettingSection onSelectMeetDate={onSelectMeetDate} />
      <Spacing size={60} />
      <ButtonGroup>
        <Button onClick={handleCreateClick} disabled={!isAllInput}>
          {t('create.continue')}
        </Button>
      </ButtonGroup>
    </>
  );
}
