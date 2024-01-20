'use client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { formatBirthBackspace, formatBirthTyping } from '../util';
import { useGetNicknameDuplicate } from '@/apis/auth';
import CountryBotoomSheet from '@/app/[lng]/(main)/profile/setting/edit/components/step1/CountryBotoomSheet';
import { useTranslation } from '@/app/i18n/client';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { Flex } from '@/components/Layout';
import { SegmentGroup } from '@/components/SegmentGroup';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useDidMount } from '@/hooks/common/useDidMount';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useModal } from '@/hooks/useModal';
import sendMessageToReactNative from '@/utils/sendMessageToReactNative';
import { type ElementType, type KeyboardEventHandler, useState } from 'react';

export default function InputForm() {
  const { t } = useTranslation('join');
  const { t: tc } = useTranslation('common');
  const hookForm = useJoinContext();
  const { watch, handleSubmit, setValue, register, setError, clearErrors, control } = hookForm;
  const { nextStep } = useFunnelContext();
  const { refetch } = useGetNicknameDuplicate({
    nickname: watch('nickname'),
  });
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  const { handleFileUploadClick, isLoading } = useFileUpload((files) =>
    setValue('imageUrl', files[0])
  );

  const isAllTyped = !!(
    watch('nickname') &&
    watch('birth') &&
    watch('gender') &&
    watch('imageUrl')
  );

  const onSubmit = () => {
    if (!isAllTyped) return;
    if (!isDuplicateChecked) {
      setError('nickname', {
        type: 'duplicate',
        message: '닉네임 중복 확인을 해주세요.',
      });
      return;
    }
    nextStep();
  };

  const handleNicknameInputChange = () => {
    clearErrors('nickname');
    setIsDuplicateChecked(false);
  };

  const handleBirthInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ): any => {
    const birth = e.currentTarget.value;
    const birthWithoutSlash = birth.replace(/[^0-9]/g, '');

    if ('key' in e && e.key === 'Backspace') {
      setValue('birth', formatBirthBackspace(birthWithoutSlash));
    } else {
      setValue('birth', formatBirthTyping(birthWithoutSlash));
    }
  };
  const { open: openBottomSheet, close: closeBottomSheet } = useModal();

  useDidMount(() => {
    sendMessageToReactNative({
      type: 'GET_PERMISSION',
      data: 'IMAGE',
    });
  });

  return (
    <Flex as="form" direction="column" onSubmit={handleSubmit(onSubmit)}>
      <Flex className="py-20" justify="center">
        <Avatar
          imageUrl={watch('imageUrl') || ''}
          size="large"
          iconVariant="add"
          isLoading={isLoading}
          onClick={handleFileUploadClick}
        />
      </Flex>
      <Spacing size={8} />

      <Flex direction="column" gap={16}>
        <Flex direction="column" gap={4}>
          <p className="text-subtitle-3">{tc('nickname')}</p>
          <Flex align="start" gap={8}>
            <div className="w-full">
              <TextFieldController
                as="input"
                hookForm={hookForm}
                register={register('nickname', {
                  required: true,
                  pattern: {
                    value: regexr.nickname,
                    message: t('invalidNicknameFormat'),
                  },
                })}
                leftCaption={
                  isDuplicateChecked ? t('nicknameAvailable') : t('* 최소 3글자, 최대 15자 이하')
                }
                placeholder={t('enterNickname')}
                maxCount={15}
                onKeyDown={handleNicknameInputChange}
              />
            </div>
            <Button
              variant="solid-default"
              className="w-auto shrink whitespace-nowrap"
              onClick={async () => {
                if (!watch('nickname').match(regexr.nickname)) {
                  setError('nickname', {
                    type: 'pattern',
                    message: t('invalidNicknameFormat'),
                  });
                  return;
                }
                const { data } = await refetch();
                if (!data) return;
                const { isExistNickname } = data;
                if (isExistNickname) {
                  setError('nickname', {
                    type: 'duplicate',
                    message: '이미 사용중인 닉네임입니다.',
                  });
                } else {
                  setIsDuplicateChecked(true);
                  clearErrors('nickname');
                }

                console.log(isExistNickname);
              }}
              type="button"
            >
              {t('checkDuplicate')}
            </Button>
          </Flex>
        </Flex>

        <Flex direction="column" gap={4}>
          <p className="text-subtitle-3">{t('dob')}</p>

          <TextFieldController
            placeholder={t('생년월일 8자리를 입력해주세요.')}
            hookForm={hookForm}
            register={register('birth', {
              required: true,
              pattern: {
                value: regexr.birth,
                message: t('dobFormat'),
              },
              onChange: handleBirthInputChange,
            })}
            onKeyDown={handleBirthInputChange as unknown as KeyboardEventHandler<ElementType<any>>}
            type="tel"
          />
        </Flex>

        <Flex direction="column" gap={4}>
          <p className="text-subtitle-3">{t('gender')}</p>
          <SegmentGroup
            selectedValue={watch('gender')}
            onChange={(value) => setValue('gender', value)}
          >
            <SegmentGroup.Segment value="MALE" label={tc('male')} />
            <SegmentGroup.Segment value="FEMALE" label={tc('female')} />
          </SegmentGroup>
        </Flex>

        <Flex direction="column" gap={4}>
          <p className="text-subtitle-3">{t('country')}</p>
          <TextFieldController
            label="국가"
            hookForm={hookForm}
            register={register('countryName')}
            readOnly
            value={watch('countryName')}
            onClick={() =>
              openBottomSheet(({ isOpen }) => (
                <CountryBotoomSheet isOpen={isOpen} onClose={closeBottomSheet} control={control} />
              ))
            }
          />
        </Flex>
      </Flex>
      <ButtonGroup>
        <Button type="submit" disabled={!isAllTyped}>
          {isAllTyped ? t('complete') : t('next')}
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
