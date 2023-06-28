import GroupingCard from '@/app/grouping/GroupingCard';

const mockData = {
  image: '/assets/location.svg',
  title: 'Let’s go for a walk!',
  description: 'It’s a group that walks around, talks, and learns languages.',
  current: '2',
  total: '4',
  location: '동대문구 회기동',
  time: '04.27.FRI 7PM',
};

const Grouping = () => {
  return (
    <div className="flex w-full items-center">
      <GroupingCard {...mockData} />
    </div>
  );
};

export default Grouping;
