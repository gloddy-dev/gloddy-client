import { useCreateGroupContext } from '../../components/CreateGroupContext';
import LocationBottomSheet from '../../components/LocationBottomSheet.client';
import { displayDate } from '../../util';
import { Spacing } from '@/components/common/Spacing';
import { SpinBox } from '@/components/SpinBox';
import { TextField } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

interface SettingSectionProps {
  onSelectMeetDate: () => void;
}

export default function SettingSection({ onSelectMeetDate }: SettingSectionProps) {
  const { open: openLocation, close: closeLocation } = useModal();
  const { watch, setValue, control } = useCreateGroupContext();

  return (
    <section id="setting">
      <section className="px-20 pb-8 pt-20">
        <p className="px-4 text-subtitle-3 text-sign-secondary">모임 일시</p>
        <Spacing size={4} />
        <TextField
          value={displayDate(watch('meetDate'), watch('time'))}
          placeholder="모임 일시를 설정해주세요."
          rightIcon={
            <Image src="/icons/24/calendar_month.svg" alt="calendar" width={24} height={24} />
          }
          onClick={onSelectMeetDate}
          readOnly
        />
      </section>

      <section className="px-20 py-8">
        <p className="px-4 text-subtitle-3 text-sign-secondary">모임 위치</p>
        <Spacing size={4} />
        <TextField
          onClick={() =>
            openLocation(<LocationBottomSheet onClose={closeLocation} control={control} />)
          }
          value={watch('place.name')}
          placeholder="모임 위치를 설정해주세요."
          rightIcon={
            <Image src="/icons/24/location_on.svg" alt="location" width={24} height={24} />
          }
          readOnly
        />
      </section>

      <section className="px-20 py-8">
        <p className="px-4 text-subtitle-3 text-sign-secondary">모임 인원</p>
        <Spacing size={4} />
        <SpinBox
          value={watch('maxUser')}
          min={3}
          max={20}
          onChange={(value) => setValue('maxUser', value)}
        />
      </section>
    </section>
  );
}
