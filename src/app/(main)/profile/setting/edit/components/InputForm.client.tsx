'use client';
import { useEditContext } from './EditProvider.client';
import ProfileEditHeader from './ProfileEditHeader';
import { useGetProfile, usePatchProfile } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import BirthdayBottomSheet from '@/components/Modal/BirthdayBottomSheet.client';
import { SegmentGroup } from '@/components/SegmentGroup';
import { Tag } from '@/components/Tag';
import { TextField, TextFieldController } from '@/components/TextField';
import { personalityList } from '@/constants/personalityList';
import { useDidMount } from '@/hooks/common/useDidMount';
import useBottomSheet from '@/hooks/useBottomSheet';
import { useFileUpload } from '@/hooks/useFileUpload';
import { formatDateDTO } from '@/utils/formatDateDTO';
import Image from 'next/image';
import Link from 'next/link';
import { useController } from 'react-hook-form';

import type { ProfileEditState } from '../type';

export default function InputForm() {
  const hookForm = useEditContext();
  const { control } = hookForm;
  const {
    data: { imageUrl, introduce, name, personalities, gender, birth },
  } = useGetProfile();

  const {
    field: { value, onChange },
  } = useController({
    name: 'imageUrl',
    control,
  });

  const { handleFileUploadClick } = useFileUpload((files) => onChange(files[0]));

  const { watch, handleSubmit, setValue, register, formState } = hookForm;
  const {
    isOpen: isOpenBirthdayBottomSheet,
    open: openBirthdayBottomSheet,
    close: closeBirthdayBottomSheet,
  } = useBottomSheet();

  const { mutate } = usePatchProfile();

  useDidMount(() => {
    setValue('imageUrl', imageUrl || '');
    setValue('name', name || '');
    setValue('introduce', introduce || '');
    setValue('gender', gender || 'MAIL');
    setValue('birth', birth || {});
  });

  const onSubmit = (data: ProfileEditState) => {
    if (!isAllTyped) return;
    const { birth, ...rest } = data;

    const profileData = {
      ...rest,
      birth: formatDateDTO(birth),
      personalities: ['OUTGOING'],
    };

    mutate(profileData);
  };

  const isBirthDayEntered = !!birth.year && !!birth.month && !!birth.date;
  const isAllTyped = formState.isValid && isBirthDayEntered && !!watch('gender');

  return (
    <Flex as="form" direction="column" onSubmit={handleSubmit(onSubmit)} className="px-20">
      <ProfileEditHeader />
      <Spacing size={20} />
      <Flex justify="center">
        <Avatar
          imageUrl={imageUrl}
          size="large"
          iconVariant="education"
          onClick={handleFileUploadClick}
        />
      </Flex>
      <Spacing size={16} />

      <p className="text-subtitle-3">닉네임</p>
      <Spacing size={4} />

      <TextFieldController
        as="input"
        placeholder="닉네임을 입력해주세요."
        hookForm={hookForm}
        register={register('name', {
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
        onClick={() => openBirthdayBottomSheet()}
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

      {isOpenBirthdayBottomSheet && (
        <BirthdayBottomSheet
          onClose={closeBirthdayBottomSheet}
          dateValue={birth}
          setValue={setValue}
          isBirthDayEntered={isBirthDayEntered}
        />
      )}

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
            value: /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{0,100}$/,
            message: '* 최대 100자 이하로 작성해주세요.',
          },
        })}
        maxCount={100}
      />

      <p className="text-subtitle-3">성격</p>
      <Spacing size={4} />
      <Flex className="gap-4" align="center">
        {personalities.map((personality, index) => (
          <Tag isSelected size="small" variant="solid" key={index}>
            {personalityList.find((it) => it.keywordInEnglish === personality)?.keyword}
          </Tag>
        ))}
        <div className="rounded-full bg-sign-brand">
          <Link href="/profile/setting/edit?step=personality">
            <Image src="/icons/24/add.svg" width={24} height={24} alt="plus" />
          </Link>
        </div>
      </Flex>

      <Spacing size={100} />

      <ButtonGroup>
        <Button type="submit" disabled={!isAllTyped}>
          확인
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
