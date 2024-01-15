import DeleteModal from './DeleteModal.client';
import { useDeleteContext } from './DeleteProvider.client';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';

const infoList = [
  'noDesiredGroups',
  'difficultToFindMembers',
  'appInconvenience',
  'rudeMembers',
  'dataLeakConcern',
  'poorMatching',
  'otherReasons',
];

export default function Step2() {
  const { open, exit } = useModal();
  const { t } = useTranslation('profile');

  const { watch, setValue } = useDeleteContext();
  const handleDeleteReason = (index: number) => {
    const deleteReason = watch('deleteReason');
    if (deleteReason.includes(index)) {
      setValue(
        'deleteReason',
        deleteReason.filter((reason) => reason !== index)
      );
    } else {
      setValue('deleteReason', [...deleteReason, index]);
    }
  };

  return (
    <div>
      <Spacing size={32} />
      <h3 className="px-20 text-h3">{t('settings.reasonForWithdrawal')}</h3>
      <Spacing size={8} />
      <div className="px-20 text-subtitle-2 text-sign-tertiary">
        <p>{t('settings.feedback')}</p>
      </div>
      <Spacing size={16} />
      <div className="px-20">
        {infoList.map((info, index) => (
          <Flex key={index} className="py-12" onClick={() => handleDeleteReason(index + 1)}>
            <CircleCheckbox checked={watch('deleteReason').includes(index + 1)} />
            <Spacing size={8} direction="horizontal" />
            <p className="text-subtitle-2 text-sign-secondary">{t(`settings.${info}`)}</p>
          </Flex>
        ))}
      </div>
      <ButtonGroup>
        <Button
          disabled={watch('deleteReason').length === 0}
          onClick={() => open(() => <DeleteModal onCancelClick={exit} />)}
        >
          {t('settings.proceedDeletion')}
        </Button>
      </ButtonGroup>
    </div>
  );
}
