import { useController } from 'react-hook-form';

import { formatBirthDTO } from '../../util';
import { useEditContext } from '../EditProvider.client';
import { usePatchProfile } from '@/apis/profile';
import { useTranslation } from '@/app/i18n/client';
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

import type { ProfileEditState } from '../../type';

interface Step1InputFormProps {
  onNext: () => void;
}
export default function Step1InputForm({ onNext }: Step1InputFormProps) {
  const { t: tc } = useTranslation('common');
  const { t } = useTranslation('profile');
  const { mutate } = usePatchProfile();
  const hookForm = useEditContext();
  const { control, watch, handleSubmit, setValue, register, formState } = hookForm;
  const personalities = watch('personalities');

  const {
    field: { value, onChange },
  } = useController({
    name: 'imageUrl',
    control,
  });
  const { handleFileUploadClick, isLoading } = useFileUpload((files) => onChange(files[0]));

  const isAllTyped = formState.isValid && !!watch('gender');

  const onSubmit = (data: ProfileEditState) => {
    const { birth } = data;

    if (!isAllTyped) return;

    mutate({ ...data, birth: formatBirthDTO(birth) });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-20">
      <Flex justify="center">
        <Avatar
          imageUrl={value}
          size="large"
          iconVariant="draft_orders"
          isLoading={isLoading}
          onClick={handleFileUploadClick}
        />
      </Flex>
      <Spacing size={16} />

      <p className="text-subtitle-3">{tc('nickname')}</p>
      <Spacing size={4} />

      <TextField as="input" value={watch('name')} readOnly />

      <Spacing size={8} />

      <p className="text-subtitle-3">{t('birth')}</p>
      <Spacing size={4} />
      <TextField placeholder={t('enterDOB')} value={watch('birth')} readOnly />

      <Spacing size={8} />

      <section className="flex flex-col">
        <p className="text-subtitle-3">{t('gender')}</p>
        <Spacing size={4} />
        <SegmentGroup
          selectedValue={watch('gender')}
          onChange={(value) => setValue('gender', value)}
        >
          <SegmentGroup.Segment value={'MALE'} label={tc('male')} />
          <SegmentGroup.Segment value={'FEMALE'} label={tc('female')} />
        </SegmentGroup>
      </section>

      <Spacing size={8} />

      <p className="text-subtitle-3">{t('introduce')}</p>
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

      <p className="text-subtitle-3">{t('personality')}</p>
      <Spacing size={4} />
      <Flex className="flex-wrap gap-4" align="center">
        {personalities.map((personality, index) => (
          <Tag isSelected size="small" variant="solid" key={index}>
            {personalityList.find((it) => it.keywordDTO === personality)?.emoji + ' '}
            {t(
              'keyword.' + personalityList.find((it) => it.keywordDTO === personality)?.keyword ||
                ''
            )}
          </Tag>
        ))}

        <div className="rounded-full bg-sign-brand" onClick={onNext}>
          <Icon id="24-add" />
        </div>
      </Flex>

      <Spacing size={100} />

      <ButtonGroup>
        <Button type="submit" disabled={!isAllTyped}>
          {tc('confirm')}
        </Button>
      </ButtonGroup>
    </form>
  );
}
