'use client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { SegmentGroup } from '@/components/SegmentGroup';
import { TextFieldController } from '@/components/TextField';

export default function TimeSection() {
  const hookForm = useCreateGroupContext();
  const { watch, setValue, register } = hookForm;

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>, min: number, max: number) => {
    const t = e.target as HTMLInputElement;
    const value = t.value;

    if (/[^0-9]/g.test(value)) {
      return;
    }

    const isValueValid = Number(value) <= max && Number(value) >= min;

    if (!isValueValid) {
      const last = value.slice(-1);
      if (last === '0' && min > 0) {
        t.value = '';
        return;
      }

      t.value = '0' + last;
      return;
    }

    if (value.length === 1) {
      t.value = '0' + value;
      return;
    }

    if (value.length === 3) {
      t.value = value.slice(1);
      return;
    }
  };

  return (
    <section className="p-20">
      <p className="pl-4 text-subtitle-3 text-sign-secondary">시작 시간</p>
      <Spacing size={8} />
      <Flex align="center" className="flex-auto">
        <SegmentGroup
          selectedValue={watch(`time.fromAmPm`)}
          onChange={(value) => {
            setValue(`time.fromAmPm`, value);
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
            register={register(`time.fromHour`, {
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
            register={register(`time.fromMin`, {
              required: true,
              onChange: (e) => handleTimeChange(e, 0, 59),
            })}
            maxLength={2}
          />
        </div>
      </Flex>
    </section>
  );
}
