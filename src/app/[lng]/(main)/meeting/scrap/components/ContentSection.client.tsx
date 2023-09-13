'use client';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingScrap } from '@/apis/meeting';
import { useTranslation } from '@/app/i18n/client';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';
import { Fragment } from 'react';

export default function ContentSection() {
  const { t } = useTranslation('meeting');
  const {
    data: { contents },
  } = useGetMeetingScrap();

  return (
    <Fragment>
      {contents.length === 0 && <NoMeeting message={t('home.noFavoritedGroups')} />}
      <ItemList
        data={contents}
        renderItem={(content) => <GroupingCard groupingData={content} isScrapped />}
      />
    </Fragment>
  );
}
