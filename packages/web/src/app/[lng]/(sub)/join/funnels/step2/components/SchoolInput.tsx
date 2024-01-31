'use client';

import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';

export default function SchoolInput() {
  const { t } = useTranslation('join');
  const hookForm = useJoinContext();
  const { handleSubmit, register, watch } = hookForm;

  const { nextStep } = useFunnelContext();

  return (
    <form onSubmit={handleSubmit(nextStep)}>
      <TextFieldController
        hookForm={hookForm}
        register={register('schoolInfo.school', {
          required: true,
          pattern: regexr.school,
        })}
        leftIcon={<Icon id="24-search" />}
        placeholder={t('enterSchoolName')}
      />

      <ButtonGroup>
        <Button disabled={!watch('schoolInfo.school').match(regexr.school)}>확인</Button>
      </ButtonGroup>
    </form>
  );
}
