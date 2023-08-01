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
  fileUrl: 'http://example.com/file1.jpg',
  title: 'Group 2',
  content: 'This is another example group',
  maxUser: 30,
  place: 'Busan, South Korea',
  meetDate: '2023-09-02',
  startTime: '18:00',
  endTime: '20:00',
  place_latitude: 35.1796,
  place_longitude: 129.0756,
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
