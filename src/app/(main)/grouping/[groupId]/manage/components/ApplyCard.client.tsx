'use client';

import ManageModal from './ManageModal';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup, IconButton } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { TextField } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

const DUMMY_DATA = {
  userImageUrl: '/images/dummy_avatar.png',
  isCertifiedStudent: true,
  name: 'Glow',
  reliabilityLevel: 'GLODDY',
  introduce: '안녕하세요! 저는 글로우입니다. 잘 부탁드립니다.',
  reason: '저는 이 모임에 가입하고 싶습니다.',
};

export default function ApplyCard() {
  const { userImageUrl, isCertifiedStudent, name, reliabilityLevel, introduce, reason } =
    DUMMY_DATA;

  const { open, close } = useModal();

  const handleAcceptClick = () => {};
  const handleRejectClick = () => {};

  return (
    <div className="w-[90%] shrink-0 rounded-8 bg-white p-16 shadow-card-ui">
      <Flex justify="between" align="center" className="my-4 gap-12">
        <Avatar
          imageUrl={userImageUrl}
          size="small"
          iconVariant={isCertifiedStudent ? 'education' : 'none'}
        />
        <div className="grow">
          <p className="text-paragraph-1">{name}</p>
          <Flex align="center" className="gap-2">
            <Image
              src={`/icons/16/${reliabilityLevel.toLowerCase()}.svg`}
              alt="medal"
              width={16}
              height={16}
            />
            <p className="text-caption text-sign-tertiary">{reliabilityLevel}</p>
          </Flex>
        </div>
        <IconButton>
          <Image src="/icons/24/navigate-next.svg" alt="navigate-next" width={24} height={24} />
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
            open(<ManageModal type="reject" onOkClick={handleRejectClick} onCancelClick={close} />)
          }
        >
          거절
        </Button>
        <Button
          onClick={() =>
            open(<ManageModal type="accept" onOkClick={handleAcceptClick} onCancelClick={close} />)
          }
        >
          승인
        </Button>
      </ButtonGroup>
    </div>
  );
}
