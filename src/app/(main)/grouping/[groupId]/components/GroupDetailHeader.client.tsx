'use client';

import BlockDoneModal from '../../components/BlockDoneModal.client';
import ReportDoneModal from '../../components/ReportDoneModal.client';
import WarningModal from '../../components/WarningModal.client';
import { useDeleteGroupMember, useGetGroupDetail } from '@/apis/groups';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import MoreBottomSheet from '@/components/Modal/MoreBottomSheet.client';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { Suspense } from '@suspensive/react';
import { useRouter } from 'next/navigation';

export default function GroupDetailHeader() {
  const router = useRouter();
  const { groupId } = useNumberParams<['groupId']>();

  return (
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton size="large" onClick={() => router.back()}>
            <Icon id="24-arrow_back" />
          </IconButton>
          <Suspense>
            <TitleAction groupId={groupId} />
          </Suspense>
        </Flex>
      </Header.Left>
      <Header.Right>
        <Flex align="center">
          <Suspense>
            <ManageButtonAction groupId={groupId} />
            <MoreButtonAction groupId={groupId} />
          </Suspense>
        </Flex>
      </Header.Right>
    </Header>
  );
}

interface ActionProps {
  groupId: number;
}

function TitleAction({ groupId }: ActionProps) {
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { title } = groupDetailData;

  return <p>{title}</p>;
}

function ManageButtonAction({ groupId }: ActionProps) {
  const router = useRouter();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isCaptain, isExistNewApply } = groupDetailData;

  return (
    isCaptain && (
      <IconButton size="large" onClick={() => router.push(`/grouping/${groupId}/manage`)}>
        {isExistNewApply ? <Icon id="24-application_notification" /> : <Icon id="24-application" />}
      </IconButton>
    )
  );
}

function MoreButtonAction({ groupId }: ActionProps) {
  const { open: openBottomSheet, close: closeBottomSheet } = useModal();
  const { open: openItemModal, exit: exitItemModal } = useModal();
  const { open: openDoneModal, exit: exitDoneModal } = useModal();

  const { mutate: mutateExitGroup, isLoading: isExitGroupLoading } = useDeleteGroupMember(groupId);
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isCaptain, myGroup } = groupDetailData;

  const handleExitClick = () => {
    mutateExitGroup({ params: { groupId } }, { onSettled: exitItemModal });
  };

  const handleReportClick = () => {
    exitItemModal();
    closeBottomSheet();
    openDoneModal(() => <ReportDoneModal onOkClick={exitDoneModal} />);
  };

  const handleBlockClick = () => {
    exitItemModal();
    closeBottomSheet();
    openDoneModal(() => <BlockDoneModal onOkClick={exitDoneModal} />);
  };

  const handleMoreClick = () => {
    openBottomSheet(({ isOpen }) => (
      <MoreBottomSheet onClose={closeBottomSheet} isOpen={isOpen}>
        <MoreBottomSheet.ListItem
          label="모임 나가기"
          isShown={myGroup && !isCaptain}
          onClick={() =>
            openItemModal(({ exit }) => (
              <WarningModal
                onCancelClick={exit}
                onOkClick={handleExitClick}
                content="모임에서 나가시겠어요?"
                description={
                  <p className="text-sign-tertiary">
                    모임방에서 나갈 시<br />
                    <span className="text-sign-brand">신뢰포인트</span>가 차감돼요.
                  </p>
                }
                okDisabled={isExitGroupLoading}
              />
            ))
          }
        />
        <MoreBottomSheet.ListItem
          label="신고하기"
          isShown={!isCaptain}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                onCancelClick={exitItemModal}
                onOkClick={handleReportClick}
                content="신고하시겠어요?"
              />
            ))
          }
        />
        <MoreBottomSheet.ListItem
          label="차단하기"
          isShown={!isCaptain}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                onCancelClick={exitItemModal}
                onOkClick={handleBlockClick}
                content="차단하시겠어요?"
              />
            ))
          }
        />
      </MoreBottomSheet>
    ));
  };

  return (
    !isCaptain && (
      <IconButton size="large" onClick={handleMoreClick}>
        <Icon id="24-more" />
      </IconButton>
    )
  );
}
