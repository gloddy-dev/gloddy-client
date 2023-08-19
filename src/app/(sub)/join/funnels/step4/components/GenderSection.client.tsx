'use client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { SegmentGroup } from '@/components/SegmentGroup';

export default function GenderSection() {
  const { watch, setValue } = useJoinContext();

  return (
    <section className="flex flex-col gap-5">
      <p className="text-14">성별</p>
      <SegmentGroup selectedValue={watch('gender')} onChange={(value) => setValue('gender', value)}>
        <SegmentGroup.Segment value={'MALE'} label="남성" />
        <SegmentGroup.Segment value={'FEMALE'} label="여성" />
      </SegmentGroup>
    </section>
  );
}
