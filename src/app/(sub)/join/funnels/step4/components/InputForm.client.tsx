'use client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useGetNicknameDuplicate } from '@/apis/auth';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { Flex } from '@/components/Layout';
import { SegmentGroup } from '@/components/SegmentGroup';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useFileUpload } from '@/hooks/useFileUpload';

const formatBirthTyping = (birth: string) => {
  if (birth.length === 4) {
    return birth + '/';
  }
  if (birth.length === 7) {
    return birth + '/';
  }
  if (birth.length > 9) {
    return birth.slice(0, 9);
  }
  return birth;
};

export default function InputForm() {
  const hookForm = useJoinContext();
  const { watch, handleSubmit, setValue, register, setError, clearErrors } = hookForm;
  const { nextStep } = useFunnelContext();
  const { refetch, isDuplicateChecked, setIsDuplicateChecked } = useGetNicknameDuplicate({
    nickname: watch('nickname'),
    setError,
    clearErrors,
  });

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

  const { handleFileUploadClick, isLoading } = useFileUpload((files) =>
    setValue('imageUrl', files[0])
  );

  const handleNicknameInputChange = () => {
    clearErrors('nickname');
    setIsDuplicateChecked(false);
  };

  const formatBirthBackspace = (birth: string) => {
    if (birth.length === 7) {
      return birth.slice(0, 4);
    }
    if (birth.length === 4) {
      return '';
    }
    return birth;
  };

  const handleBirthInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ): any => {
    const birth = e.currentTarget.value.replace(/[^0-9]/g, '');
    const birthWithoutSlash = watch('birth').replace(/[^0-9]/g, '');
    if ('key' in e && e.key === 'Backspace') {
      setValue('birth', formatBirthBackspace(birthWithoutSlash));
    }
    setValue('birth', formatBirthTyping(watch('birth')));
  };

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
          <p className="text-subtitle-3">닉네임</p>
          <Flex align="start" gap={8}>
            <div className="w-full">
              <TextFieldController
                as="input"
                hookForm={hookForm}
                register={register('nickname', {
                  required: true,
                  pattern: {
                    value: regexr.nickname,
                    message: `* 올바른 형식이 아닙니다 (최소 3글자\n최대 15글자 이하, 특수문자 금지)`,
                  },
                })}
                leftCaption={
                  isDuplicateChecked ? '사용 가능한 닉네임입니다.' : '* 최소 3글자, 최대 15자 이하'
                }
                placeholder="닉네임을 입력해주세요."
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
                    message: `* 올바른 형식이 아닙니다 (최소 3글자\n최대 15글자 이하, 특수문자 금지)`,
                  });
                  return;
                }
                await refetch();
              }}
              type="button"
            >
              중복 확인
            </Button>
          </Flex>
        </Flex>

        <Flex direction="column" gap={4}>
          <p className="text-subtitle-3">생년월일</p>

          <TextFieldController
            placeholder="생년월일 8자리를 입력해주세요."
            hookForm={hookForm}
            register={register('birth', {
              required: true,
              pattern: {
                value: regexr.birth,
                message: '* 생년월일을 다시 확인해주세요.',
              },
            })}
            onKeyDown={handleBirthInputChange}
          />
        </Flex>

        <Flex direction="column" gap={4}>
          <p className="text-subtitle-3">성별</p>
          <SegmentGroup
            selectedValue={watch('gender')}
            onChange={(value) => setValue('gender', value)}
          >
            <SegmentGroup.Segment value="MAIL" label="남성" />
            <SegmentGroup.Segment value="FEMAIL" label="여성" />
          </SegmentGroup>
        </Flex>
      </Flex>
      <ButtonGroup>
        <Button type="submit" disabled={!isAllTyped}>
          {isAllTyped ? '완료' : '다음'}
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
