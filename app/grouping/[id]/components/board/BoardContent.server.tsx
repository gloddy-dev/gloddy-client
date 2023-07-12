import Spacing from '@/components/common/Spacing';
import CardList from './CardList.server';
import Notice from './Notice';

const DUMMY_DATA = [
  {
    id: 1,
    name: 'Kim',
    writeDate: '2021.09.01',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
    likeCount: 0,
    commentCount: 0,
    isLeader: true,
  },
  {
    id: 2,
    name: 'Kim',
    writeDate: '2021.09.01',
    content: '안녕하세요! 모임에 가입해주셔서 감사드립니다.',
    likeCount: 10,
    commentCount: 100,
    isLeader: false,
  },
  {
    id: 3,
    name: 'Kim',
    writeDate: '2021.09.01',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
    likeCount: 0,
    commentCount: 0,
    isLeader: true,
  },
];

export default function BoardContent() {
  return (
    <>
      <Notice />
      <Spacing size={15} />
      <CardList cardList={DUMMY_DATA} />
      <Spacing size={100} />
    </>
  );
}
