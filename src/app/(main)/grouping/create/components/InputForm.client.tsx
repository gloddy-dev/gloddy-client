'use client';

import { useCreateGroupContext } from './CreateGroupContext';
import InputArea from './InputArea.server';
import SubmitSection from './inputSection/SubmitSection';
import LocationBottomSheet from './LocationBottomSheet.client';
import MaxUserBottomSheet from './MaxUserBottomSheet.client';
import MeetingDateBottomSheet from './MeetingDateBottomSheet.client';
import { displayDate } from '../util';
import ImageFrame from '@/components/common/ImageFrame';
import { Spacing } from '@/components/common/Spacing';
import { TextFieldController } from '@/components/TextField';
import useBottomSheet from '@/hooks/useBottomSheet';
import { useRef } from 'react';

import type { TimeType } from '@/types';

export default function InputForm() {
  const imgRef = useRef<HTMLInputElement>(null);

  const { isOpen: isOpenMeetDate, open: openMeetDate, close: closeMeetDate } = useBottomSheet();
  const { isOpen: isOpenLocation, open: openLocation, close: closeLocation } = useBottomSheet();
  const { isOpen: isOpenMaxUser, open: openMaxUser, close: closeMaxUser } = useBottomSheet();

  const hookForm = useCreateGroupContext();
  const { watch, setValue, getFieldState, register } = hookForm;

  const isMeetingDateDirty = getFieldState('date').isDirty || getFieldState('time').isDirty;

  return (
    <form>
      <ImageFrame
        setImageUrl={(value: string) => setValue('imageUrl', value)}
        shape="square"
        ref={imgRef}
      />

      <p className="text-secondary px-4 text-subtitle-3">방 제목</p>
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

      <Spacing size={15} />

      <div className="flex justify-between">
        <div className="mb-5 text-14">활동 소개글</div>
        <div className="text-12 text-gray2"></div>
      </div>
      <TextFieldController
        placeholder="내용을 입력해주세요."
        register={register('content', {
          required: true,
        })}
        hookForm={hookForm}
        as="textarea"
        maxCount={500}
      />

      <InputArea
        title="모임 일시"
        onClick={() => openMeetDate()}
        value={isMeetingDateDirty ? displayDate(watch('date'), watch('time')) : ''}
        placeholder="모임 시간을 설정해주세요."
      />

      <InputArea
        title="모임 장소"
        onClick={() => openLocation()}
        value={''} // TODO : 지도 api 연동 후 추가
        placeholder="모임 장소를 설정해주세요."
      />

      <InputArea
        title="모임 인원"
        onClick={() => openMaxUser()}
        value={getFieldState('maxUser').isDirty ? `최대 ${watch('maxUser')}명` : ''}
        placeholder="모임 인원을 설정해주세요."
      />

      <Spacing size={100} />
      <SubmitSection />

      {isOpenMeetDate && (
        <MeetingDateBottomSheet
          dateValue={watch('date')}
          timeValue={watch('time')}
          setValue={setValue}
          openNext={() => {
            closeMeetDate();
            openLocation();
          }}
          closeCurrent={closeMeetDate}
        />
      )}
      {isOpenLocation && (
        <LocationBottomSheet
          openNext={() => {
            closeLocation();
            openMaxUser();
          }}
          closeCurrent={closeLocation}
        />
      )}
      {isOpenMaxUser && (
        <MaxUserBottomSheet
          maxUserValue={watch('maxUser')}
          setValue={setValue}
          closeCurrent={closeMaxUser}
        />
      )}
    </form>
  );
}
