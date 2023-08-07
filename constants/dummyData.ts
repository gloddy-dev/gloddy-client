
import type { MatesResponse } from '@/apis/profile';

import type {
  Article,
  Comment,
  CreateGroupRequest,
  GroupDetailResponse,
  Grouping,
} from '@/apis/groups';

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
    placeLatitude: 37.579,
    placeLongitude: 127.056,
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
    placeLatitude: 37.579,
    placeLongitude: 127.056,
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
    placeLatitude: 37.579,
    placeLongitude: 127.056,
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
  placeLatitude: 23,
  placeLongitude: 123,
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

export const DUMMY_ARTICLES_DATA: Article[] = [
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

export const DETAIL_DUMMY_DATA: GroupDetailResponse = {
  imageUrl: '/assets/main_logo.png',
  title: 'Let’s go for a walk!',
  content: 'It’s a group that \n🏃walks around, \n🗣talks, \n🌏and learns languages.',
  memberCount: 2,
  maxUser: 4,
  place: '동대문구 회기동',
  meetDate: '2021-10-10',
  startTime: '10:00',
  endTime: '12:00',
  placeLatitude: 37.589039,
  placeLongitude: 127.057761,
  isCaptain: true,
  myGroup: true,
};

export const DUMMY_PROFILE_MATES_DATA: MatesResponse['mates'] = [
  {
    mateImageUrl: '/assets/avatar.svg',
    mateName: 'John Doe',
    school: 'Harvard University',
    createdAt: '2023-08-06T12:34:56Z',
    selectionReason: `글로디 어플을 사용하면서 첫 모임을 해보았던 건데 어색함 없이 모임을 잘 이끌어주시고 너무 친절하셔서 덕분에 거리낌 없이 즐거운 모임을 한 것 같습니다.좋은 추억 만들어 주셔서 감사합니다~`,
  },
  {
    mateImageUrl: '/assets/avatar.svg',
    mateName: 'Jane Smith',
    school: 'Stanford University',
    createdAt: '2023-08-05T11:22:33Z',
    selectionReason: 'Both love hiking and nature.',
  },
  {
    mateImageUrl: '/assets/avatar.svg',
    mateName: 'Alice Johnson',
    school: 'MIT',
    createdAt: '2023-08-04T09:45:12Z',
    selectionReason: 'Connected through mutual friends.',
  },
  {
    mateImageUrl: '/assets/avatar.svg',
    mateName: 'Bob Brown',
    school: 'UCLA',
    createdAt: '2023-08-03T14:56:22Z',
    selectionReason: 'Met at a conference.',
  },
  {
    mateImageUrl: '/assets/avatar.svg',
    mateName: 'Charlie Green',
    school: 'Oxford University',
    createdAt: '2023-08-02T10:15:25Z',
    selectionReason: 'Worked on a project together.',

export const MEMBER_DUMMY_DATA = [
  {
    imageUrl: '/assets/avatar.svg',
    name: '김지환',
    isCaptain: true,
    isCertified: true,
    personality: 'SOUL MATE',
  },
  {
    imageUrl: '/assets/avatar.svg',
    name: 'david',
    isCaptain: false,
    isCertified: true,
    personality: 'MATE',
  },
  {
    imageUrl: '/assets/avatar.svg',
    name: 'alice',
    isCaptain: false,
    isCertified: false,
    personality: 'MATE',
  },
];

export const DUMMY_COMMENTS_DATA: Comment[] = [
  {
    commentId: 1,
    userImageUrl: '/assets/avatar.svg',
    name: '김지환',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',

    date: '2021.09.01',
    writer: true,
  },
  {
    commentId: 2,
    userImageUrl: '/assets/avatar.svg',
    name: 'david',
    content: 'hello',
    date: '2021.09.01',
    writer: false,
  },
  {
    commentId: 3,
    userImageUrl: '/assets/avatar.svg',
    name: 'alice',
    content: '안녕하세요',
    date: '2021.09.01',
    writer: false,
  },
];
