import BoardContent from './components/board/BoardContent.server';
import ContentSection from './components/ContentSection.client';
import DetailContent from './components/detail/DetailContent.server';
import TopNavigationBar from './components/TopNavigationBar.client';
import TopSection from './components/TopSection.client';

const DETAIL_DUMMY_DATA = {
  image: '/assets/main_logo.png',
  title: 'Let’s go for a walk!',
  description: 'It’s a group that \n🏃walks around, \n🗣talks, \n🌏and learns languages.',
  current: '2',
  total: '4',
  location: '동대문구 회기동',
  time: '04.27.FRI 7PM',
};

export default function GroupingByIdPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { image, title, description, location, time } = DETAIL_DUMMY_DATA;

  return (
    <main>
      <TopNavigationBar />
      <TopSection title={title} thumbnailUrl={image} description={description} />
      <ContentSection
        detailNode={<DetailContent location={location} time={time} />}
        boardNode={<BoardContent />}
      />
    </main>
  );
}
