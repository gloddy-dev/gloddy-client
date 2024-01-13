import InputSection from './InputSection.client';
import SettingSection from './SettingSection.client';
import UploadSection from './UploadSection.client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import CreateModal from '../../components/CreateModal.client';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Toast } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import useBrowser from '@/hooks/useBrowser';
import { useModal } from '@/hooks/useModal';
import { format } from 'date-fns';

import type { CreateGroupContextValue } from '../../type';
import type { TimeType } from '@/types';
import type { SubmitHandler } from 'react-hook-form';

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
  const { open: openToast } = useModal({ delay: 2000 });

  const isAllInput = Object.values(hookForm.watch()).every((value) => {
    if (typeof value === 'object') {
      return Object.values(value).every((v) => !!v);
    }
    return !!value;
  });

  const formatDateForm = browser === 'safari' ? 'yyyy/MM/dd' : 'yyyy-MM-dd';

  const handleCreateClick = () => {
    if (!validateDate(watch('meetDate'), watch('time'), browser)) {
      openToast(() => <Toast>{t('create.error.time')}</Toast>);
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
