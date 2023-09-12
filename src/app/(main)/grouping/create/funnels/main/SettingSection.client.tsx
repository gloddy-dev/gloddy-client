import { useCreateGroupContext } from '../../components/CreateGroupContext';
import LocationBottomSheet from '../../components/LocationBottomSheet.client';
import { displayDate } from '../../util';
import { Icon } from '@/components/Icon';
import { Spacing } from '@/components/Spacing';
import { SpinBox } from '@/components/SpinBox';
import { TextField } from '@/components/TextField';
import { GOOGLE_API_KEY } from '@/constants';
import { useModal } from '@/hooks/useModal';
import { LoadScript } from '@react-google-maps/api';
import { useController } from 'react-hook-form';

interface SettingSectionProps {
  onSelectMeetDate: () => void;
}

export default function SettingSection({ onSelectMeetDate }: SettingSectionProps) {
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
        <p className="px-4 text-subtitle-3 text-sign-secondary">모임 일시</p>
        <Spacing size={4} />
        <TextField
          value={displayDate(watch('meetDate'), watch('time'))}
          placeholder="모임 일시를 설정해주세요."
          rightIcon={<Icon id="24-calendar_month" />}
          onClick={onSelectMeetDate}
          readOnly
        />
      </section>

      <section className="px-20 py-8">
        <p className="px-4 text-subtitle-3 text-sign-secondary">모임 위치</p>
        <Spacing size={4} />
        <TextField
          onClick={() =>
            openLocationSheet(({ isOpen }) => (
              <LocationBottomSheet onClose={closeLocationSheet} control={control} isOpen={isOpen} />
            ))
          }
          value={watch('place.name')}
          placeholder="모임 위치를 설정해주세요."
          rightIcon={<Icon id="24-location_on" />}
          readOnly
        />
      </section>

      <section className="px-20 py-8">
        <p className="px-4 text-subtitle-3 text-sign-secondary">모임 인원</p>
        <Spacing size={4} />
        <SpinBox value={maxUser.value} min={3} max={20} onChange={maxUser.onChange} />
      </section>
    </section>
  );
}
