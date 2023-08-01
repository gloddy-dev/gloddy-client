'use client';
import { useCreateGroupContext } from '../CreateGroupContext';
import { usePostCreateGroup } from '@/apis/groups/mutations.client';
import { BottomFixedButton } from '@/components/common/Button';
import { format } from 'date-fns';

import type { CreateGroupContextValue } from '../../type';
import type { CreateGroupRequest } from '@/apis/groups/type';
import type { AMPMType } from '@/types';

function convertTimeFormat(hour: number, minute: number, ampm: AMPMType) {
  if (ampm === 'AM') {
    return `${hour}:${minute}`;
  }

  return `${Number(hour) + 12}:${minute}`;
}

const CREATE_GROUP_DUMMY_DATA: CreateGroupRequest = {
  fileUrl: '그룹 이미지 Url',
  title: '김지환이의 그룹',
  content: '안녕하세요',
  meetDate: '2022-09-07',
  startTime: '17:00',
  endTime: '21:00',
  place: '서울특별시 강남구 테헤란로 16',
  place_latitude: '23',
  place_longitude: '123',
  maxUser: 4,
};

export default function SubmitSection() {
  const { mutate: createGroupMutate } = usePostCreateGroup();

  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = useCreateGroupContext();
  const onCreateGroupSubmit = (data: CreateGroupContextValue) => {
    const { date, time, ...rest } = data;

    const createGroupRequest = {
      ...rest,
      meetDate: format(data.date, 'yyyy-MM-dd'),
      startTime: convertTimeFormat(data.time.fromHour, data.time.fromMin, data.time.fromAmPm),
      endTime: convertTimeFormat(data.time.toHour, data.time.toMin, data.time.toAmPm),
    };

    createGroupMutate(CREATE_GROUP_DUMMY_DATA);
  };

  return (
    <BottomFixedButton
      text="완료"
      disabled={!isDirty || !isValid}
      onClick={handleSubmit(onCreateGroupSubmit)}
    />
  );
}
