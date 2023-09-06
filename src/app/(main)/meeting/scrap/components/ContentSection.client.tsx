'use client';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingScrap } from '@/apis/meeting';

export default function ContentSection() {
  const { data } = useGetMeetingScrap();
  console.log(data);
  const arr = [];
  return <div>{arr.length === 0 && <NoMeeting message="아직 찜한 모임이 없어요." />}</div>;
}
