'use client';

import { useCreateGroupContext } from './CreateGroupContext';
import CreateModal from './CreateModal.client';
import LocationBottomSheet from './LocationBottomSheet.client';
import MaxUserBottomSheet from './MaxUserBottomSheet.client';
import MeetingDateBottomSheet from './MeetingDateBottomSheet.client';
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
import { makeFileToBlob } from '@/utils/makeFileToBlob';
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

  const { handleFileUploadClick } = useFileUpload((files: File[]) =>
    setValue('imageFile', files[0])
  );

  const { mutateAsync: mutateAsyncPostFiles } = usePostFiles();
  const { mutate: mutateCreateGroup } = usePostCreateGroup();

  const isMeetingDateDirty = getFieldState('meetDate').isDirty || getFieldState('time').isDirty;

  const onSubmit: SubmitHandler<CreateGroupContextValue> = (data) => {
    console.log(data);
    openCreateModal(
      <CreateModal
        onCancelClick={closeCreateModal}
        onOkClick={async () => {
          // const { fileUrlList } = await mutateAsyncPostFiles({ fileList: [data.imageFile] });
          // mutateCreateGroup({
          //   ...data,

          //   imageUrl: fileUrlList[0],
          // });

          closeCreateModal();
        }}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        justify="center"
        align="center"
        className="relative mx-20 h-180 overflow-hidden rounded-8 bg-sub"
        onClick={handleFileUploadClick}
      >
        {!!watch('imageFile') ? (
          <Image
            src={makeFileToBlob(watch('imageFile'))}
            alt="group_image"
            className="object-cover"
            fill
          />
        ) : (
          <Image src="/icons/48/add_photo_white.svg" alt="add_photo" width={48} height={48} />
        )}
      </Flex>
      <section className="mx-20">
        <Spacing size={20} />
        <p className="px-4 text-subtitle-3 text-sign-secondary">방제목</p>
        <Spacing size={4} />
        <TextFieldController
          placeholder="제목을 입력해주세요"
          hookForm={hookForm}
          register={register('title', {
            required: true,
            maxLength: 20,
          })}
          maxCount={20}
        />
        <Spacing size={8} />
      </section>

      <section className="mx-20">
        <Spacing size={8} />
        <p className="px-4 text-subtitle-3 text-sign-secondary">활동 소개글</p>
        <Spacing size={4} />
        <TextFieldController
          placeholder="내용을 입력해주세요."
          register={register('content', {
            required: true,
          })}
          hookForm={hookForm}
          as="textarea"
          maxCount={500}
        />
        <Spacing size={8} />
      </section>

      <Divider thickness="thick" />

      <section className="mx-20">
        <Spacing size={20} />
        <p className="px-4 text-subtitle-3 text-sign-secondary">모임 일시</p>
        <Spacing size={4} />
        <TextField
          onClick={() => openMeetDate(<MeetingDateBottomSheet onClose={closeMeetDate} />)}
          value={watch('meetDate') ? displayDate(watch('meetDate'), watch('time')) : ''}
          placeholder="모임 일시를 설정해주세요."
          rightIcon={
            <Image src="/icons/24/calendar_month.svg" alt="calendar" width={24} height={24} />
          }
          readOnly
        />
      </section>

      <section className="mx-20">
        <Spacing size={8} />
        <p className="px-4 text-subtitle-3 text-sign-secondary">모임 위치</p>
        <Spacing size={4} />
        <TextField
          onClick={() => openLocation(<LocationBottomSheet onClose={closeLocation} />)}
          value={getFieldState('placeName').isDirty ? watch('placeName') : ''}
          placeholder="모임 위치를 설정해주세요."
          rightIcon={
            <Image src="/icons/24/location_on.svg" alt="location" width={24} height={24} />
          }
          readOnly
        />
        <Spacing size={8} />
      </section>

      <section className="mx-20">
        <Spacing size={8} />
        <p className="px-4 text-subtitle-3 text-sign-secondary">모임 인원</p>
        <Spacing size={4} />
        <TextField
          onClick={() => openMaxUser(<MaxUserBottomSheet onClose={closeMaxUser} />)}
          value={getFieldState('maxUser').isDirty ? `최대 ${watch('maxUser')}명` : ''}
          placeholder="모임 인원을 설정해주세요."
          rightIcon={<Image src="/icons/24/group.svg" alt="maxUser" width={24} height={24} />}
          readOnly
        />
        <Spacing size={8} />
      </section>
      <Spacing size={60} />
      <ButtonGroup>
        <Button type="submit" disabled={!formState.isValid || !formState.isDirty}>
          완료
        </Button>
      </ButtonGroup>
    </form>
  );
}
