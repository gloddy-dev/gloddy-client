'use client';
import { useCreateGroupContext } from '../CreateGroupContext';
import { usePostCreateGroup } from '@/apis/groups/mutations';
import { BottomFixedButton } from '@/components/common/Button';
import { CREATE_GROUP_DUMMY_DATA } from '@/constants/dummyData';
import { format } from 'date-fns';

import type { CreateGroupContextValue } from '../../type';
import type { AMPMType } from '@/types';

function convertTimeFormat(hour: string, minute: string, ampm: AMPMType) {
  if (ampm === 'AM') {
    return `${hour}:${minute}`;
  }

  return `${Number(hour) + 12}:${minute}`;
}

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
      meetDate: format(date, 'yyyy-MM-dd'),
      startTime: convertTimeFormat(data.time.fromHour, data.time.fromMin, data.time.fromAmPm),
      endTime: convertTimeFormat(data.time.toHour, data.time.toMin, data.time.toAmPm),
    };
    console.log(createGroupRequest);

    // createGroupMutate(CREATE_GROUP_DUMMY_DATA);
  };

  return (
    <BottomFixedButton
      text="완료"
      disabled={!isDirty || !isValid}
      onClick={handleSubmit(onCreateGroupSubmit)}
    />
  );
}
