import NoMeeting from '../../components/NoMeeting';

interface ContentSectionProps {}
export default function ContentSection() {
  const arr = [];
  return <div>{arr.length === 0 && <NoMeeting message="아직 찜한 모임이 없어요." />}</div>;
}
