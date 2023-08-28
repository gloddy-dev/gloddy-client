export interface Grouping {
  groupId: number;
  imageUrl: string;
  title: string;
  content: string;
  memberCount: number;
  maxUser: number;
  place: string;
  meetDate: string; // '2021-08-01'
  startTime: string; // '19:00'
  endTime: string; // '21:00'
  placeLatitude: number;
  placeLongitude: number;
}

export interface Article {
  articleId: number;
  userImageUrl: string;
  name: string;
  date: string;
  content: string;
  notice: boolean;
  commentCount: number;
  isCertifiedStudent: boolean;
  isCaptain: boolean;
  isWriter: boolean;
  isWriterCaptain: boolean;
  isWriterCertifiedStudent: boolean;
  writerReliabilityLevel: string;
  images: string[];
}

export interface Comment {
  commentId: number;
  userImageUrl: string;
  name: string;
  date: string;
  content: string;
  writer: boolean;
}

export interface GroupsResponse {
  totalCount: number;
  currentCount: number;
  currentPage: number;
  totalPage: number;
  contents: Grouping[];
}

export interface GroupDetailResponse extends Omit<Grouping, 'groupId'> {
  myGroup: true;
  isCaptain: true;
}

export interface CreateGroupRequest extends Omit<Grouping, 'groupId' | 'memberCount' | 'imageUrl'> {
  imageUrl: string;
}

export interface ArticleRequest {
  groupId: number;
  article: Pick<Article, 'content' | 'notice' | 'images'>;
}

export interface ArticlesResponse {
  totalCount: number;
  currentCount: number;
  currentPage: number;
  totalPage: number;
  contents: Article[];
}

export interface CommentRequest {
  groupId: number;
  articleId: number;
  content: string;
}

export interface CommentsReponse {
  comments: Comment[];
}

export interface GroupMember {
  isCaptain: boolean;
  isCertifiedStudent: boolean;
  userId: number;
  nickName: string;
  imageUrl: string;
  reliabilityLevel: string; // TODO: 리터럴로 변경
}

export interface GroupMembersResponse {
  groupMembers: GroupMember[];
}

export interface Notice {
  noticeId: number;
  content: string;
}
