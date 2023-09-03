'use client';

import DeleteModal from '../../components/DeleteModal.client';
import { useDeleteGroupMember, useGetGroupDetail } from '@/apis/groups';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Flex } from '@/components/Layout';
import MoreBottomSheet from '@/components/Modal/MoreBottomSheet.client';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GroupingHeader() {
  const router = useRouter();
  const { groupId } = useNumberParams<['groupId']>();
  const { open, close } = useModal();
  const { open: openExitGroup, close: closeExitGroup } = useModal();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { mutate: mutateExitGroup, isLoading: isExitGroupLoading } = useDeleteGroupMember(groupId);
  const { title, isCaptain, myGroup } = groupDetailData;

  const handleExitClick = () => {
    openExitGroup(
      <DeleteModal
        onCancelClick={closeExitGroup}
        onOkClick={() => {
          mutateExitGroup();
        }}
        content="모임에서 나가시겠어요?"
        description={
          <p className="text-sign-tertiary">
            모임방에서 나갈 시<br />
            <span className="text-sign-brand">신뢰포인트</span>가 차감돼요.
          </p>
        }
        okDisabled={isExitGroupLoading}
      />
    );
  };

  const handleMoreClick = () => {
    open(
      <MoreBottomSheet onClose={close}>
        <MoreBottomSheet.ListItem label="모임 나가기" onClick={handleExitClick} />
      </MoreBottomSheet>
    );
  };

  return (
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton size="large" onClick={() => router.back()}>
            <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
          </IconButton>
          <p>{title}</p>
        </Flex>
      </Header.Left>
      <Header.Right>
        <Flex align="center">
          {isCaptain && (
            <IconButton size="large" onClick={() => router.push(`/grouping/${groupId}/manage`)}>
              <Image src="/icons/24/application.svg" alt="application" width={24} height={24} />
            </IconButton>
          )}
          {myGroup && !isCaptain && (
            <IconButton size="large" onClick={handleMoreClick}>
              <Image src="/icons/24/more.svg" alt="more" width={24} height={24} />
            </IconButton>
          )}
        </Flex>
      </Header.Right>
    </Header>
  );
}
