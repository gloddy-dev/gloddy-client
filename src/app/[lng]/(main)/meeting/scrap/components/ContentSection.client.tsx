'use client';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingScrap } from '@/apis/meeting';
import { useTranslation } from '@/app/i18n/client';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';

export default function ContentSection() {
  const { t } = useTranslation('meeting');
  const {
    data: { contents },
  } = useGetMeetingScrap();

  return (
    <ItemList
      data={contents}
      renderItem={(content) => <GroupingCard groupingData={content} isScrapped />}
      renderEmpty={() => <NoMeeting message={t('home.noFavoritedGroups')} />}
    />
  );
}
