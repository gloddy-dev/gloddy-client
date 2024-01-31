'use client';
import RejectModal from './RejectModal';
import SubtitleSection from './SubtitleSection';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingRejected, useGetMeetingWaiting } from '@/apis/meeting';
import { useTranslation } from '@/app/i18n/client';
import { GroupingCard } from '@/components/Card';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';

export default function WaitingContent() {
  const { t } = useTranslation('meeting');
  const {
    data: { groups: meetingWaitingData },
  } = useGetMeetingWaiting();
  const {
    data: { groups: meetingRejectedData },
  } = useGetMeetingRejected();

  const { open } = useModal();

  return (
    <>
      <Spacing size={20} />
      <SubtitleSection text={t('home.awaitingApproval')} />

      {meetingWaitingData.length === 0 && <NoMeeting message={t('home.noPendingGroups')} />}
      {meetingWaitingData.map((groupingData) => (
        <GroupingCard groupingData={groupingData.group} key={groupingData.group.groupId} />
      ))}

      <Spacing size={8} />
      <Divider thickness="thick" />
      <Spacing size={20} />

      <SubtitleSection text={t('home.rejectedGroups')} />

      {meetingRejectedData.length === 0 && <NoMeeting message={t('home.noRejectedGroups')} />}
      {meetingRejectedData.map((groupingData) => (
        <GroupingCard
          groupingData={groupingData.group}
          key={groupingData.group.groupId}
          applyId={groupingData.applyId}
          onClick={() => open(() => <RejectModal applyId={groupingData.applyId} />)}
        />
      ))}
    </>
  );
}
