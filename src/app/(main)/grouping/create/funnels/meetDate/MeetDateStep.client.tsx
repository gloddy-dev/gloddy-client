import TimeSection from './TimeSection.client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import { Button, ButtonGroup } from '@/components/Button';
import Calendar from '@/components/common/Calendar';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';

interface MeetDateStepProps {
  onDone: () => void;
}
export default function MeetDateStep({ onDone }: MeetDateStepProps) {
  const hookForm = useCreateGroupContext();
  const { watch, setValue } = hookForm;

  return (
    <>
      <Calendar
        dateValue={watch('meetDate')}
        setDateValue={(date: Date) => setValue('meetDate', date, { shouldDirty: true })}
      />
      <Divider thickness="thick" />
      <TimeSection type="from" />
      <TimeSection type="to" />
      <Spacing size={60} />
      <ButtonGroup>
        <Button onClick={onDone}>완료</Button>
      </ButtonGroup>
    </>
  );
}
