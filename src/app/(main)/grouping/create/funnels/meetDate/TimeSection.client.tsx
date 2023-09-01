'use client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { SegmentGroup } from '@/components/SegmentGroup';
import { TextField } from '@/components/TextField';

interface TimeSectionProps {
  type: 'from' | 'to';
}

export default function TimeSection({ type }: TimeSectionProps) {
  const hookForm = useCreateGroupContext();
  const { watch, setValue, register } = hookForm;

  return (
    <section className="p-20">
      <p className="pl-4 text-subtitle-3 text-sign-secondary">
        {type === 'from' ? '시작 시간' : '종료 시간'}
      </p>
      <Spacing size={8} />
      <Flex align="center">
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
        <TextField
          as="input"
          type="number"
          placeholder="시간"
          register={register(`time.${type}Hour`, {
            required: true,
            min: 0,
            max: 11,
            valueAsNumber: true,
          })}
        />
        <Spacing direction="horizontal" size={4} />
        <p className="text-subtitle-2 text-sign-secondary">:</p>
        <Spacing direction="horizontal" size={4} />
        <TextField
          as="input"
          type="number"
          placeholder="분"
          register={register(`time.${type}Min`, {
            required: true,
            min: 0,
            max: 59,
            valueAsNumber: true,
          })}
        />
      </Flex>
    </section>
  );
}
