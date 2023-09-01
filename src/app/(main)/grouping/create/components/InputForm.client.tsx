'use client';

import { useCreateGroupContext } from './CreateGroupContext';
import CreateModal from './CreateModal.client';
import LocationBottomSheet from './LocationBottomSheet.client';
import { displayDate } from '../util';
import { usePostFiles } from '@/apis/common';
import { usePostCreateGroup } from '@/apis/groups';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { TextField, TextFieldController } from '@/components/TextField';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import { SubmitHandler } from 'react-hook-form';

import type { CreateGroupContextValue } from '../type';

export default function InputForm() {
  const { open: openMeetDate, close: closeMeetDate } = useModal();
  const { open: openLocation, close: closeLocation } = useModal();
  const { open: openMaxUser, close: closeMaxUser } = useModal();
  const { open: openCreateModal, close: closeCreateModal } = useModal();

  const hookForm = useCreateGroupContext();
  const { watch, setValue, getFieldState, register, handleSubmit, formState } = hookForm;

  const { mutate: mutateCreateGroup } = usePostCreateGroup();

  const isMeetingDateDirty = getFieldState('meetDate').isDirty || getFieldState('time').isDirty;

  const onSubmit: SubmitHandler<CreateGroupContextValue> = (data) => {
    console.log(data);

    openCreateModal(
      <CreateModal
        onCancelClick={closeCreateModal}
        onOkClick={() => {
          mutateCreateGroup({
            placeName: '스타벅스 동대문공원점',
            placeAddress: '서울 중구 장충단로 229',
            placeLatitude: '37.565289',
            placeLongitude: '127.001285',
            content: data.content,
            maxUser: data.maxUser,
            meetDate: '2023-11-20',
            startTime: '14:00',
            endTime: '16:00',
            // startTime:
            //   data.time.fromHour.padStart(2, '0') + ':' + data.time.fromMin.padStart(2, '0'),
            // endTime: data.time.toHour.padStart(2, '0') + ':' + data.time.toMin.padStart(2, '0'),
            title: data.title,

            imageUrl: data.imageUrl,
          });

          closeCreateModal();
        }}
      />
    );
  };

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
}
