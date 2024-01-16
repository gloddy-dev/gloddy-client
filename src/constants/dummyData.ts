import type {
  Apply,
  Article,
  CreateGroupRequest,
  GroupDetailResponse,
  GroupMember,
  Grouping,
} from '@/apis/groups';
import type { MatesResponse } from '@/apis/profile';

export const DUMMY_GROUPING_DATA: Grouping[] = [
  {
    groupId: 12345,
    imageUrl: '/images/dummy_image.png',
    title: 'Let’s go for a walk!',
    content: 'This is a sample content for the group.',
    memberCount: 10,
    maxMemberCount: 50,
    meetDate: '2022-09-07',
    startTime: '19:00',
    placeName: 'Sample Place Name',
    placeAddress: '123 Sample Street, Sample City, 12345',
    placeLatitude: 37.7749,
    placeLongitude: -122.4194,
    placeId: 'ChIJgUbEo8cfqokR5lP9_Wh_DaM',
  },
  {
    groupId: 12346,
    imageUrl: '/images/dummy_image.png',
    title: 'Let’s go for a walk!',
    content: 'This is a sample content for the group.',
    memberCount: 10,
    maxMemberCount: 50,
    meetDate: '2022-09-07',
    startTime: '19:00',
    placeName: 'Sample Place Name',
    placeAddress: '123 Sample Street, Sample City, 12345',
    placeLatitude: 37.7749,
    placeLongitude: -122.4194,
    placeId: 'ChIJgUbEo8cfqokR5lP9_Wh_DaM',
  },
  {
    groupId: 12346,
    imageUrl: '/images/dummy_image.png',
    title: 'Let’s go for a walk!',
    content: 'This is a sample content for the group.',
    memberCount: 10,
    maxMemberCount: 50,
    meetDate: '2022-09-07',
    startTime: '19:00',
    placeName: 'Sample Place Name',
    placeAddress: '123 Sample Street, Sample City, 12345',
    placeLatitude: 37.7749,
    placeLongitude: -122.4194,
    placeId: 'ChIJgUbEo8cfqokR5lP9_Wh_DaM',
  },
];

export const CREATE_GROUP_DUMMY_DATA: CreateGroupRequest = {
  imageUrl: '그룹 이미지 Url',
  title: '김지환이의 그룹',
  content: '안녕하세요',
  meetDate: '2022-09-07',
  startTime: '17:00',
  placeName: '서울특별시 강남구 테헤란로 16',
  placeAddress: '123 Sample Street, Sample City, 12345',
  placeLatitude: 23,
  placeLongitude: 123,
  placeId: 'ChIJgUbEo8cfqokR5lP9_Wh_DaM',
  maxUser: 4,
};

export const DUMMY_SIGN_UP_DATA = {
  phoneNumber: '010-5728-9310',
  schoolInfo: {
    school: '경희대학교',
    email: 'gueit201@gachon.ac.kr',
    certifiedStudent: true,
  },
  nickname: '박규리',
  birth: '2000-02-14',
  gender: 'MALE',
  personalities: ['OUTGOING'],
};

export const DUMMY_ARTICLES_DATA: Article[] = [
  {
    articleId: 1,
    userId: 1,
    images: ['/images/dummy_avatar.png', '/images/dummy_image.png'],
    notice: true,
    userImageUrl: '/images/dummy_avatar.png',
    name: 'Ahn Ki Hyeon',
    date: '2023-10-29T20:22:33Z',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
    commentCount: 0,
    isWriter: true,
    isWriterCaptain: true,
    isWriterCertifiedStudent: true,
    writerReliabilityLevel: 'HOOD',
  },
  {
    articleId: 2,
    userId: 2,
    images: [],
    notice: false,
    userImageUrl: '/images/dummy_avatar.png',
    name: 'Kim',
    date: '2023.09.01',
    content: '안녕하세요! 모임에 가입해주셔서 감사드립니다.',
    commentCount: 100,
    isWriter: false,
    isWriterCaptain: false,
    isWriterCertifiedStudent: false,
    writerReliabilityLevel: 'HOOD',
  },
  {
    articleId: 3,
    userId: 2,
    images: ['/images/dummy_image.png', '/images/dummy_image.png', '/images/dummy_image.png'],
    notice: false,
    userImageUrl: '/images/dummy_avatar.png',
    name: 'Kim',
    date: '2021.09.01',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
    commentCount: 0,
    isWriter: false,
    isWriterCaptain: false,
    isWriterCertifiedStudent: false,
    writerReliabilityLevel: 'HOOD',
  },
];

export const DETAIL_DUMMY_DATA: GroupDetailResponse = {
  isApplyWaited: false,
  isScraped: false,
  groupId: 1,
  imageUrl: '/images/dummy_image.png',
  fileUrl: '/images/dummy_image.png',
  title: 'Let’s go for a walk!',
  content: 'It’s a group that \n🏃walks around, \n🗣talks, \n🌏and learns languages.',
  memberCount: 2,
  maxMemberCount: 4,
  meetDate: '2021-10-10',
  startTime: '10:00',
  placeName: '경희대학교 서울캠퍼스',
  placeAddress: '서울특별시 동대문구 회기동',
  placeLatitude: 37.589039,
  placeLongitude: 127.057761,
  placeId: 'ChIJgUbEo8cfqokR5lP9_Wh_DaM',
  isCaptain: true,
  myGroup: true,
  isExistNewApply: true,
};

export const DUMMY_PROFILE_MATES_DATA: MatesResponse['mates'] = [
  {
    mateImageUrl: '/images/dummy_avatar.png',
    mateName: 'John Doe',
    school: 'Harvard University',
    createdAt: '2023-08-06T12:34:56Z',
    selectionReason: `글로디 어플을 사용하면서 첫 모임을 해보았던 건데 어색함 없이 모임을 잘 이끌어주시고 너무 친절하셔서 덕분에 거리낌 없이 즐거운 모임을 한 것 같습니다.좋은 추억 만들어 주셔서 감사합니다~`,
    mateId: 1,
  },
  {
    mateImageUrl: '/images/dummy_avatar.png',
    mateName: 'Jane Smith',
    school: 'Stanford University',
    createdAt: '2023-08-05T11:22:33Z',
    selectionReason: 'Both love hiking and nature.',
    mateId: 2,
  },
  {
    mateImageUrl: '/images/dummy_avatar.png',
    mateName: 'Alice Johnson',
    school: 'MIT',
    createdAt: '2023-08-04T09:45:12Z',
    selectionReason: 'Connected through mutual friends.',
    mateId: 3,
  },
  {
    mateImageUrl: '/images/dummy_avatar.png',
    mateName: 'Bob Brown',
    school: 'UCLA',
    createdAt: '2023-08-03T14:56:22Z',
    selectionReason: 'Met at a conference.',
    mateId: 4,
  },
  {
    mateImageUrl: '/images/dummy_avatar.png',
    mateName: 'Charlie Green',
    school: 'Oxford University',
    createdAt: '2023-08-02T10:15:25Z',
    selectionReason: 'Worked on a project together.',
    mateId: 5,
  },
];

export const MEMBER_DUMMY_DATA: GroupMember[] = [
  {
    userId: 1,
    imageUrl: '/images/dummy_avatar.png',
    isCertifiedStudent: true,
    nickName: '김지환',
    isCaptain: true,
    reliabilityLevel: 'HOOD',
  },
  {
    userId: 2,
    imageUrl: '/images/dummy_avatar.png',
    isCertifiedStudent: true,
    nickName: 'John Doe',
    reliabilityLevel: 'MATE',
    isCaptain: false,
  },
  {
    imageUrl: '/images/dummy_avatar.png',
    isCertifiedStudent: false,
    nickName: 'Jane Smith',
    reliabilityLevel: 'SOULMATE',
    userId: 3,
    isCaptain: false,
  },
  {
    imageUrl: '/images/dummy_avatar.png',
    isCertifiedStudent: true,
    nickName: 'Alice Johnson',
    reliabilityLevel: 'GLODDY',
    userId: 4,
    isCaptain: false,
  },
];

export const DUMMY_COMMENTS_DATA = [
  {
    commentId: 1,
    userImageUrl: '/images/dummy_avatar.png',
    name: '김지환',
    content:
      '안녕하세요! 모임에 가입해주셔서 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',

    date: '2021.09.01',
    isWriter: true,
    isWriterCaptain: true,
    isWriterCertifiedStudent: true,
    writerReliabilityLevel: 'HOOD',
  },
  {
    commentId: 2,
    userImageUrl: '/images/dummy_avatar.png',
    name: 'david',
    content: 'hello',
    date: '2021.09.01',
    isWriter: false,
    isWriterCaptain: false,
    isWriterCertifiedStudent: false,
    writerReliabilityLevel: 'HOOD',
  },
  {
    commentId: 3,
    userImageUrl: '/images/dummy_avatar.png',
    name: 'alice',
    content: '안녕하세요',
    date: '2021.09.01',
    isWriter: false,
    isWriterCaptain: false,
    isWriterCertifiedStudent: false,
    writerReliabilityLevel: 'HOOD',
  },
];

export const DUMMY_SEARCH_RESULT_LIST = [
  {
    id: 1,
    name: '경희대학교 서울캠퍼스',
    address: '서울특별시 동대문구 경희대로 26',
  },
  {
    id: 2,
    name: '경희주유소',
    address: '서울특별시 동대문구 경희대로 26',
  },
  {
    id: 3,
    name: '경희주유소',
    address: '서울특별시 동대문구 경희대로 26',
  },
];

export const DUMMY_APPLY_DATA: Apply[] = [
  {
    applyId: 1,
    userId: 1,
    isCertifiedStudent: true,
    userImageUrl: '/images/dummy_avatar.png',
    userNickname: 'Glow',
    reliabilityLevel: 'GLODDY',
    introduce: '안녕하세요! 저는 글로우입니다. 잘 부탁드립니다.',
    reason: '저는 이 모임에 가입하고 싶습니다.',
  },
  {
    applyId: 2,
    userId: 2,
    isCertifiedStudent: true,
    userImageUrl: '/images/dummy_avatar.png',
    userNickname: 'Glow',
    reliabilityLevel: 'GLODDY',
    introduce: '안녕하세요! 저는 글로우입니다. 잘 부탁드립니다.',
    reason: '저는 이 모임에 가입하고 싶습니다.',
  },
  {
    applyId: 3,
    userId: 3,
    isCertifiedStudent: false,
    userImageUrl: '/images/dummy_avatar.png',
    userNickname: 'Glow',
    reliabilityLevel: 'GLODDY',
    introduce: '안녕하세요! 저는 글로우입니다. 잘 부탁드립니다.',
    reason: '저는 이 모임에 가입하고 싶습니다.',
  },
];

export const DUMMY_DATA_ESTIMATE = {
  groupMemberList: [
    {
      imageUrl: '/images/dummy_avatar.png',
      name: '김지수',
      userId: 1,
    },
    {
      imageUrl: '/images/dummy_avatar.png',
      name: '김지하',
      userId: 2,
    },
    {
      imageUrl: '/images/dummy_avatar.png',
      name: '김지상',
      userId: 3,
    },
  ],
};
