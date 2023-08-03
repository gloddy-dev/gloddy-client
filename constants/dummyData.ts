import type { Article, CreateGroupRequest, Grouping } from '@/apis/groups';

export const DUMMY_GROUPING_DATA: Grouping[] = [
  {
    groupId: 1,
    imageUrl: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    content: 'It’s a group that walks around, talks, and learns languages.',
    memberCount: 2,
    maxUser: 2,
    place: '동대문구 회기동',
    meetDate: '04.27.FRI 7PM',
    startTime: '13:00',
    endTime: '15:00',
    placeLatitude: '37.579',
    placeLongitude: '127.056',
  },
  {
    groupId: 2,
    imageUrl: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    content: 'It’s a group that walks around, talks, and learns languages.',
    memberCount: 2,
    maxUser: 3,
    place: '동대문구 회기동',
    meetDate: '04.27.FRI 7PM',
    startTime: '13:00',
    endTime: '15:00',
    placeLatitude: '37.579',
    placeLongitude: '127.056',
  },
  {
    groupId: 3,
    imageUrl: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    content: 'It’s a group that walks around, talks, and learns languages.',
    memberCount: 0,
    maxUser: 5,
    place: '동대문구 회기동',
    meetDate: '04.27.FRI 7PM',
    startTime: '13:00',
    endTime: '15:00',
    placeLatitude: '37.579',
    placeLongitude: '127.056',
  },
];

export const CREATE_GROUP_DUMMY_DATA: CreateGroupRequest = {
  imageUrl: '그룹 이미지 Url',
  title: '김지환이의 그룹',
  content: '안녕하세요',
  meetDate: '2022-09-07',
  startTime: '17:00',
  endTime: '21:00',
  place: '서울특별시 강남구 테헤란로 16',
  placeLatitude: '23',
  placeLongitude: '123',
  maxUser: 4,
};

export const DUMMY_SIGN_UP_DATA = {
  phoneNumber: '010-5728-9353',
  imageUrl:
    'https://gloddy.s3.ap-northeast-2.amazonaws.com/file/87d8b6c4-fcda-4588-8334-b3ca96e635a0.png',
  schoolInfo: {
    school: '가천대학교',
    email: 'gueit214@gachon.ac.kr',
    certifiedStudent: true,
  },
  nickname: 'string',
  birth: '2023-07-22',
  gender: 'MAIL',
  personalities: ['OUTGOING'],
};

export const DUMMY_DATA: Article[] = [
  {
    articleId: 1,
    images: [],
    notice: true,
    userImageUrl: '/assets/avatar.svg',
    name: 'Kim',
    date: '2021.09.01',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
    commentCount: 0,
  },
  {
    articleId: 2,
    images: [],
    notice: false,
    userImageUrl: '/assets/avatar.svg',
    name: 'Kim',
    date: '2021.09.01',
    content: '안녕하세요! 모임에 가입해주셔서 감사드립니다.',
    commentCount: 100,
  },
  {
    articleId: 3,
    images: [],
    notice: false,
    userImageUrl: '/assets/avatar.svg',
    name: 'Kim',
    date: '2021.09.01',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
    commentCount: 0,
  },
];
