'use client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { SegmentGroup } from '@/components/SegmentGroup';
import { TextFieldController } from '@/components/TextField';

interface TimeSectionProps {
  type: 'from' | 'to';
}

export default function TimeSection({ type }: TimeSectionProps) {
  const hookForm = useCreateGroupContext();
  const { watch, setValue, register } = hookForm;

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>, min: number, max: number) => {
    const t = e.target as HTMLInputElement;
    const value = t.value;

    if (value.length === 2 && (Number(value) > max || Number(value) < min)) {
      t.value = '';
      return;
    }

    if (value.length >= 3) {
      t.value = value.slice(0, 2);
      return;
    }
  };

  return (
    <section className="p-20">
      <p className="pl-4 text-subtitle-3 text-sign-secondary">
        {type === 'from' ? '시작 시간' : '종료 시간'}
      </p>
      <Spacing size={8} />
      <Flex align="center" className="flex-auto">
        <SegmentGroup
          selectedValue={watch(`time.${type}AmPm`)}
          onChange={(value) => {
            setValue(`time.${type}AmPm`, value);
          }}
          className="shrink-0"
        >
          <SegmentGroup.Segment label="오전" value="AM" />
          <SegmentGroup.Segment label="오후" value="PM" />
        </SegmentGroup>
        <Spacing direction="horizontal" size={8} />

        <div className="flex-1">
          <TextFieldController
            as="input"
            type="number"
            hookForm={hookForm}
            placeholder="시간"
            register={register(`time.${type}Hour`, {
              required: true,
              onChange: (e) => handleTimeChange(e, 1, 12),
            })}
            maxLength={2}
          />
        </div>
        <Spacing direction="horizontal" size={4} />
        <p className="text-subtitle-2 text-sign-secondary">:</p>
        <Spacing direction="horizontal" size={4} />
        <div className="flex-1">
          <TextFieldController
            as="input"
            type="number"
            hookForm={hookForm}
            placeholder="분"
            register={register(`time.${type}Min`, {
              required: true,
              min: 0,
              max: 59,
              valueAsNumber: true,
              maxLength: 2,
              onChange: (e) => handleTimeChange(e, 0, 59),
            })}
          />
        </div>
      </Flex>
    </section>
  );
}
