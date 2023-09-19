'use client';

import ManageModal from './ManageModal';
import { Apply, usePatchApply } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup, IconButton } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { TextField } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { useRouter } from 'next/navigation';

interface ApplyCardProps {
  apply: Apply;
  groupId: number;
}

export default function ApplyCard({ apply, groupId }: ApplyCardProps) {
  const { t } = useTranslation('groupDetail');
  const {
    userId,
    applyId,
    isCertifiedStudent,
    userImageUrl,
    userNickname,
    reliabilityLevel,
    introduce,
    reason,
  } = apply;

  const router = useRouter();
  const { open, exit } = useModal();
  const { mutate: mutatePatchApply } = usePatchApply(groupId);

  const handleApproveClick = () => {
    mutatePatchApply(
      { params: { groupId, applyId, status: 'APPROVE' } },
      {
        onSettled: exit,
      }
    );
  };

  const handleRefuseClick = () => {
    mutatePatchApply(
      { params: { groupId, applyId, status: 'REFUSE' } },
      {
        onSettled: exit,
      }
    );
  };

  return (
    <div className="w-full shrink-0 rounded-8 bg-white p-16 shadow-card-ui">
      <Flex justify="between" align="center" className="my-4 gap-12">
        <Avatar
          imageUrl={userImageUrl}
          size="small"
          onClick={() => router.push(`/profile/${userId}`)}
          iconVariant={isCertifiedStudent ? 'education' : 'none'}
        />
        <div className="grow">
          <p className="text-paragraph-1">{userNickname}</p>
          <Flex align="center" className="gap-2">
            <Icon id={`16-reliability-${reliabilityLevel.toLowerCase()}`} width={16} height={16} />

            <p className="text-caption text-sign-tertiary">{reliabilityLevel}</p>
          </Flex>
        </div>
        <IconButton>
          <Icon id="24-navigate_next" />
        </IconButton>
      </Flex>
      <Spacing size={16} />
      <p className="px-4 text-sign-secondary">{t('apply.introduce')}</p>
      <Spacing size={4} />
      <TextField as="textarea" value={introduce} readOnly />
      <Spacing size={16} />
      <p className="px-4 text-sign-secondary">{t('apply.reason')}</p>
      <TextField as="textarea" value={reason} readOnly />
      <Spacing size={16} />
      <ButtonGroup position="contents" hasDivider={false}>
        <Button
          variant="solid-warning"
          onClick={() =>
            open(() => (
              <ManageModal type="REFUSE" onOkClick={handleRefuseClick} onCancelClick={exit} />
            ))
          }
        >
          {t('manage.refuse.label')}
        </Button>
        <Button
          onClick={() =>
            open(() => (
              <ManageModal type="APPROVE" onOkClick={handleApproveClick} onCancelClick={exit} />
            ))
          }
        >
          {t('manage.approve.label')}
        </Button>
      </ButtonGroup>
    </div>
  );
}
