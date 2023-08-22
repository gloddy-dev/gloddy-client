'use client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { BottomFixedButton } from '@/components/common/Button';
import ImageFrame from '@/components/common/ImageFrame';
import { Spacing } from '@/components/common/Spacing';
import { DateSwipePicker } from '@/components/common/SwipePicker';
import { Flex } from '@/components/Layout';
import { BottomSheet } from '@/components/Modal';
import { SegmentGroup } from '@/components/SegmentGroup';
import { TextField, TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { DateType } from '@/types';

export default function InputForm() {
  const hookForm = useJoinContext();
  const { watch, handleSubmit, setValue, register } = hookForm;
  const { nextStep } = useFunnelContext();
  const { open: openBirthdayBottomSheet, close: closeBirthdayBottomSheet } = useModal();
  const isAllTyped = !!(
    watch('nickname') &&
    watch('birth').year &&
    watch('birth').month &&
    watch('birth').date &&
    watch('gender')
  );
  const onSubmit = () => {
    if (!isAllTyped) return;
    nextStep();
  };

  const birth = watch('birth');

  const isBirthDayEntered = !!birth.year && !!birth.month && !!birth.date;

  return (
    <Flex as="form" direction="column" onSubmit={handleSubmit(onSubmit)}>
      <ImageFrame setImageUrl={(imageUrl: string) => setValue('imageUrl', imageUrl)} />

      <p className="text-subtitle-3">닉네임</p>
      <Spacing size={4} />

      <TextFieldController
        as="input"
        placeholder="닉네임을 입력해주세요."
        hookForm={hookForm}
        register={register('nickname', {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{3,15}$/,
            message: '* 최소 3글자 이상 15자 이하로 작성해주세요.',
          },
        })}
        leftCaption="* 최소 3글자 이상 15자 이하로 작성해주세요."
        maxCount={15}
      />

      <Spacing size={8} />

      <p className="text-subtitle-3">생년월일</p>
      <Spacing size={4} />
      <TextField
        placeholder="생년월일을 선택해주세요."
        onClick={() =>
          openBirthdayBottomSheet(() => (
            <BottomSheet
              snap={400}
              onClose={closeBirthdayBottomSheet}
              isRightButton
              title="생년월일"
              disableDrag
            >
              <DateSwipePicker
                dateValue={birth}
                setDateValue={(birth: DateType) => setValue('birth', birth)}
              />
              <BottomFixedButton text="다음" disabled={!isBirthDayEntered} />
            </BottomSheet>
          ))
        }
        value={isBirthDayEntered ? `${birth.year} ${birth.month} ${birth.date}` : ''}
        readOnly
      />

      <Spacing size={8} />

      <section className="flex flex-col">
        <p className="text-subtitle-3">성별</p>
        <Spacing size={4} />
        <SegmentGroup
          selectedValue={watch('gender')}
          onChange={(value) => setValue('gender', value)}
        >
          <SegmentGroup.Segment value={'MALE'} label="남성" />
          <SegmentGroup.Segment value={'FEMALE'} label="여성" />
        </SegmentGroup>
      </section>

      <BottomFixedButton disabled={!isAllTyped} text={isAllTyped ? '완료' : '다음'} type="submit" />
    </Flex>
  );
}
