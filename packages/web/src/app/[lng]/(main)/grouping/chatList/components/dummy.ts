export interface Chat {
  title: string;
  content: string;
  imageUrl: string;
  newMessag?: number;
  groupId: number;
  latestMessageTiem: string;
}

export const chatList: Chat[] = [
  {
    title: '응가 뿌직',
    content: '응가좀 치는사람 모이셈',
    newMessag: 1,
    imageUrl: '/images/approve_character.png',
    groupId: 10,
    latestMessageTiem: '2024-04-10T18:44',
  },
  {
    title: '응가 뿌직',
    content: '응가좀 치는사람 모이셈',
    newMessag: 2,
    imageUrl: '/images/approve_character.png',
    groupId: 10,
    latestMessageTiem: '2024-04-06T20:32',
  },
  {
    title: '응가 뿌직',
    content: '응가좀 치는사람 모이셈',
    newMessag: 2,
    imageUrl: '/images/approve_character.png',
    groupId: 10,
    latestMessageTiem: '2024-04-06T20:32',
  },
  {
    title: '응가 뿌직',
    content: '응가좀 치는사람 모이셈',

    imageUrl: '/images/approve_character.png',
    groupId: 10,
    latestMessageTiem: '2024-04-06T20:32',
  },
  {
    title: '응가 뿌직',
    content: '응가좀 치는사람 모이셈',
    newMessag: 3,

    imageUrl: '/images/approve_character.png',
    groupId: 10,
    latestMessageTiem: '2024-04-06T20:32',
  },
];
