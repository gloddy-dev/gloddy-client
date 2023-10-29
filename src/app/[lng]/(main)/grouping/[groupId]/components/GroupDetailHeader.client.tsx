'use client';

import BlockDoneModal from '../../components/BlockDoneModal.client';
import ReportDoneModal from '../../components/ReportDoneModal.client';
import WarningModal from '../../components/WarningModal.client';
import { useDeleteGroupMember, useGetGroupDetail } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import MoreBottomSheet from '@/components/Modal/MoreBottomSheet.client';
import useAppRouter from '@/hooks/useAppRouter';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useBlockStore } from '@/store/useBlockStore';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function GroupDetailHeader() {
  const { back } = useAppRouter();
  const { groupId } = useNumberParams<['groupId']>();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <Suspense>
          <TitleAction groupId={groupId} />
        </Suspense>
      </Header.Left>
      <Header.Right>
        <Suspense>
          <ManageButtonAction groupId={groupId} />
          <MoreButtonAction groupId={groupId} />
        </Suspense>
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

  return <p className="w-full truncate">{title}</p>;
}

function ManageButtonAction({ groupId }: ActionProps) {
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isCaptain, isExistNewApply } = groupDetailData;
  const { push } = useAppRouter();

  return (
    isCaptain && (
      <IconButton size="large" onClick={() => push(`/grouping/${groupId}/manage`)}>
        <Icon id={`24-application${isExistNewApply ? '_notification' : ''}`} />
      </IconButton>
    )
  );
}

function MoreButtonAction({ groupId }: ActionProps) {
  const { t } = useTranslation('groupDetail');
  const { replace, back } = useAppRouter();
  const { setBlockId } = useBlockStore();
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
    setBlockId(groupId, 'group');
    exitItemModal();
    closeBottomSheet();
    openDoneModal(() => (
      <ReportDoneModal
        onOkClick={() => {
          exitDoneModal();
          replace('/grouping');
          back(); // tab에 의해 스택이 두개가 쌓여있어 한번 더 뒤로가기
        }}
      />
    ));
  };

  const handleBlockClick = () => {
    setBlockId(groupId, 'group');
    exitItemModal();
    closeBottomSheet();
    openDoneModal(() => (
      <BlockDoneModal
        onOkClick={() => {
          exitDoneModal();
          replace('/grouping');
          back(); // tab에 의해 스택이 두개가 쌓여있어 한번 더 뒤로가기
        }}
      />
    ));
  };

  const handleMoreClick = () => {
    openBottomSheet(({ isOpen }) => (
      <MoreBottomSheet onClose={closeBottomSheet} isOpen={isOpen}>
        <MoreBottomSheet.ListItem
          label={t('group.exit.label')}
          isShown={myGroup && !isCaptain}
          onClick={() =>
            openItemModal(({ exit }) => (
              <WarningModal
                onCancelClick={exit}
                onOkClick={handleExitClick}
                content={t('group.exit.content')}
                description={
                  <p className="text-sign-tertiary">
                    {t('group.exit.description1')}
                    <br />
                    <span className="text-sign-brand">{t('group.exit.description2')}</span>
                    {t('group.exit.description3')}
                  </p>
                }
                okDisabled={isExitGroupLoading}
              />
            ))
          }
        />
        <MoreBottomSheet.ListItem
          label={t('group.report.label')}
          isShown={!isCaptain}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                onCancelClick={exitItemModal}
                onOkClick={handleReportClick}
                content={t('group.report.content')}
              />
            ))
          }
        />
        <MoreBottomSheet.ListItem
          label={t('group.block.label')}
          isShown={!isCaptain}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                onCancelClick={exitItemModal}
                onOkClick={handleBlockClick}
                content={t('group.block.content')}
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
