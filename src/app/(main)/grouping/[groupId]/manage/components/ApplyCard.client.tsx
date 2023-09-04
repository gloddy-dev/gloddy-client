'use client';

import ManageModal from './ManageModal';
import { Apply, usePatchApply } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup, IconButton } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { TextField } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ApplyCardProps {
  apply: Apply;
  groupId: number;
}

export default function ApplyCard({ apply, groupId }: ApplyCardProps) {
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
  const { open, close } = useModal();
  const { mutate: mutatePatchApply } = usePatchApply(groupId);

  const handleApproveClick = () => {
    mutatePatchApply(
      { groupId, applyId, status: 'APPROVE' },
      {
        onSettled: close,
      }
    );
  };

  const handleRefuseClick = () => {
    mutatePatchApply(
      { groupId, applyId, status: 'REFUSE' },
      {
        onSettled: close,
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
            <Image
              src={`/icons/16/reliability/${reliabilityLevel.toLowerCase()}.svg`}
              alt="medal"
              width={16}
              height={16}
            />
            <p className="text-caption text-sign-tertiary">{reliabilityLevel}</p>
          </Flex>
        </div>
        <IconButton>
          <Image src="/icons/24/navigate_next.svg" alt="navigate_next" width={24} height={24} />
        </IconButton>
      </Flex>
      <Spacing size={16} />
      <p className="px-4 text-sign-secondary">나는 이런 사람이에요!</p>
      <Spacing size={4} />
      <TextField as="textarea" value={introduce} readOnly />
      <Spacing size={16} />
      <p className="px-4 text-sign-secondary">모임에 함께하고 싶은 이유</p>
      <TextField as="textarea" value={reason} readOnly />
      <Spacing size={16} />
      <ButtonGroup position="contents" hasDivider={false}>
        <Button
          variant="solid-warning"
          onClick={() =>
            open(<ManageModal type="REFUSE" onOkClick={handleRefuseClick} onCancelClick={close} />)
          }
        >
          거절
        </Button>
        <Button
          onClick={() =>
            open(
              <ManageModal type="APPROVE" onOkClick={handleApproveClick} onCancelClick={close} />
            )
          }
        >
          승인
        </Button>
      </ButtonGroup>
    </div>
  );
}
