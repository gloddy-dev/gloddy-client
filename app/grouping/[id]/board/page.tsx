import TopNavigationBar from '../components/TopNavigationBar.client';
import TopSection from '../components/TopSection.client';

const DETAIL_DUMMY_DATA = {
  image: '/assets/location.svg',
  title: 'Let’s go for a walk!',
  description: 'It’s a group that \n🏃walks around, \n🗣talks, \n🌏and learns languages.',
  current: '2',
  total: '4',
  location: '동대문구 회기동',
  time: '04.27.FRI 7PM',
};

export default function GroupingBoardPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { image, title, description, current, total, location, time } = DETAIL_DUMMY_DATA;

  return (
    <main>
      <TopNavigationBar />
      <TopSection id={id} title={title} thumbnailUrl={image} description={description} />
      <div className="h-982"></div>
    </main>
  );
}
