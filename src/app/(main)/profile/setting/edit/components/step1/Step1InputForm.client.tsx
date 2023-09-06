import BirthdayBottomSheet from './BirthdayBottomSheet.client';
import { useEditContext } from '../EditProvider.client';
import { usePatchProfile } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { SegmentGroup } from '@/components/SegmentGroup';
import { Spacing } from '@/components/Spacing';
import { Tag } from '@/components/Tag';
import { TextField, TextFieldController } from '@/components/TextField';
import { personalityList } from '@/constants/personalityList';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useModal } from '@/hooks/useModal';
import { formatDateDTO } from '@/utils/formatDateDTO';
import { useController } from 'react-hook-form';

import type { ProfileEditState } from '../../type';

interface Step1InputFormProps {
  onNext: () => void;
}
export default function Step1InputForm({ onNext }: Step1InputFormProps) {
  const { mutate } = usePatchProfile();

  const hookForm = useEditContext();
  const { control, watch, handleSubmit, setValue, register, formState } = hookForm;
  const birth = watch('birth');
  const personalities = watch('personalities');

  const {
    field: { value, onChange },
  } = useController({
    name: 'imageUrl',
    control,
  });
  const { handleFileUploadClick } = useFileUpload((files) => onChange(files[0]));

  const { open: openBirthdayBottomSheet, close: closeBirthdayBottomSheet } = useModal();

  const onSubmit = (data: ProfileEditState) => {
    if (!isAllTyped) return;
    const { birth, ...rest } = data;

    const profileData = {
      ...rest,
      birth: formatDateDTO(birth),
    };

    mutate(profileData);
  };

  const isBirthDayEntered = !!birth.year && !!birth.month && !!birth.date;
  const isAllTyped = formState.isValid && isBirthDayEntered && !!watch('gender');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-20">
      <Flex justify="center">
        <Avatar
          imageUrl={value}
          size="large"
          iconVariant="draft_orders"
          onClick={handleFileUploadClick}
        />
      </Flex>
      <Spacing size={16} />

      <p className="text-subtitle-3">닉네임</p>
      <Spacing size={4} />

      <TextField as="input" value={watch('name')} readOnly />

      <Spacing size={8} />

      <p className="text-subtitle-3">생년월일</p>
      <Spacing size={4} />
      <TextField
        placeholder="생년월일을 선택해주세요."
        onClick={() =>
          openBirthdayBottomSheet(({ isOpen }) => (
            <BirthdayBottomSheet onClose={closeBirthdayBottomSheet} isOpen={isOpen} />
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
          <SegmentGroup.Segment value={'MAIL'} label="남성" />
          <SegmentGroup.Segment value={'FEMAIL'} label="여성" />
        </SegmentGroup>
      </section>

      <Spacing size={8} />

      <p className="text-subtitle-3">자기소개</p>
      <Spacing size={4} />
      <TextFieldController
        as="textarea"
        placeholder="자기소개를 입력해주세요."
        hookForm={hookForm}
        register={register('introduce', {
          required: true,
          pattern: {
            value: /^[\s\S]{0,100}$/,
            message: '* 최대 100자 이하로 작성해주세요.',
          },
        })}
        maxCount={100}
      />

      <p className="text-subtitle-3">성격</p>
      <Spacing size={4} />
      <Flex className="flex-wrap gap-4" align="center">
        {personalities.map((personality, index) => (
          <Tag isSelected size="small" variant="solid" key={index}>
            {personalityList.find((it) => it.keywordInEnglish === personality)?.keyword}
          </Tag>
        ))}

        <div className="rounded-full bg-sign-brand" onClick={onNext}>
          <Icon id="24-add" />
        </div>
      </Flex>

      <Spacing size={100} />

      <ButtonGroup>
        <Button type="submit" disabled={!isAllTyped}>
          확인
        </Button>
      </ButtonGroup>
    </form>
  );
}
