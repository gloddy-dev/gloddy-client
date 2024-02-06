import { useController } from 'react-hook-form';

import { useCreateGroupContext } from '../../components/CreateGroupContext';
import LocationBottomSheet from '../../components/LocationBottomSheet.client';
import { displayDate } from '../../util';

import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Spacing } from '@/components/Spacing';
import { SpinBox } from '@/components/SpinBox';
import { TextField } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';

interface SettingSectionProps {
  onSelectMeetDate: () => void;
}

export default function SettingSection({ onSelectMeetDate }: SettingSectionProps) {
  const { t } = useTranslation('grouping');
  const { open: openLocationSheet, close: closeLocationSheet } = useModal();
  const { watch, control } = useCreateGroupContext();

  const { field: maxUser } = useController({
    name: 'maxUser',
    control,
    rules: {
      required: true,
    },
  });

  return (
    <section id="setting">
      <section className="px-20 pb-8 pt-20">
        <p className="text-subtitle-3 text-sign-secondary px-4">{t('create.meetDate.label')}</p>
        <Spacing size={4} />
        <TextField
          value={displayDate(watch('meetDate'), watch('time'))}
          placeholder={t('create.meetDate.placeholder')}
          rightIcon={<Icon id="24-calendar_month" />}
          onClick={onSelectMeetDate}
          readOnly
        />
      </section>

      <section className="px-20 py-8">
        <p className="text-subtitle-3 text-sign-secondary px-4">{t('create.place.label')}</p>
        <Spacing size={4} />
        <TextField
          onClick={() =>
            openLocationSheet(({ isOpen }) => (
              <LocationBottomSheet onClose={closeLocationSheet} control={control} isOpen={isOpen} />
            ))
          }
          value={watch('place.name')}
          placeholder={t('create.place.placeholder')}
          rightIcon={<Icon id="24-location_on" />}
          readOnly
        />
      </section>

      <section className="px-20 py-8">
        <p className="text-subtitle-3 text-sign-secondary px-4">{t('create.maxUser.label')}</p>
        <Spacing size={4} />
        <SpinBox value={maxUser.value} min={3} max={20} onChange={maxUser.onChange} />
      </section>
    </section>
  );
}
