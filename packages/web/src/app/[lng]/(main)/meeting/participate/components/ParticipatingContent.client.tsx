'use client';
import SubtitleSection from './SubtitleSection';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingHosting, useGetMeetingParticipating } from '@/apis/meeting';
import { useTranslation } from '@/app/i18n/client';
import { GroupingCard } from '@/components/Card';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';

export default function ParticipatingContent() {
  const { t } = useTranslation('meeting');
  const {
    data: { groups: meetingParticipatingData },
  } = useGetMeetingParticipating();
  const {
    data: { groups: meetingHostingData },
  } = useGetMeetingHosting();

  return (
    <>
      <Spacing size={20} />
      <SubtitleSection text={t('home.memberGroup')} />

      {meetingParticipatingData.length === 0 && (
        <NoMeeting message={t('home.noParticipatingGroups')} />
      )}
      {meetingParticipatingData.map((groupingData) => (
        <GroupingCard
          groupingData={groupingData.group}
          key={groupingData.group.groupId}
          isNew={groupingData.isNew}
        />
      ))}

      <Spacing size={8} />
      <Divider thickness="thick" />
      <Spacing size={20} />

      <SubtitleSection text={t('home.hostingGroup')} />

      {meetingHostingData.length === 0 && <NoMeeting message={t('home.noHostingGroups')} />}
      {meetingHostingData.map((groupingData) => (
        <GroupingCard
          groupingData={groupingData.group}
          key={groupingData.group.groupId}
          isExistNewApply={groupingData.isExistNewApply}
        />
      ))}
    </>
  );
}
