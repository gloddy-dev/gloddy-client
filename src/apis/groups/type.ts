import type { ApplyStatusType, ReliabilityType } from '@/types';

export interface Grouping {
  groupId: number;
  imageUrl: string;
  fileUrl?: string;
  title: string;
  content: string;
  memberCount: number;
  maxMemberCount: number;
  meetDate: string; // '2021-08-01'
  startTime: string; // '19:00'
  placeName: string;
  placeAddress: string;
  placeLatitude: number;
  placeLongitude: number;
}

export interface Article {
  userId: number;
  articleId: number;
  userImageUrl: string;
  name: string;
  date: string;
  content: string;
  notice: boolean;
  commentCount: number;
  isWriter: boolean;
  isWriterCertifiedStudent: boolean;
  writerReliabilityLevel: ReliabilityType;
  isWriterCaptain: boolean;
  images: string[];
}

export interface Comment {
  userId: number;
  commentId: number;
  userImageUrl: string;
  name: string;
  date: string;
  content: string;
  isWriter: boolean;
  isWriterCaptain: boolean;
  isWriterCertifiedStudent: boolean;
  writerReliabilityLevel: ReliabilityType;
}

export interface Notice {
  noticeId: number;
  content: string;
}

export interface Apply {
  applyId: number;
  userId: number;
  userNickname: string;
  userImageUrl: string;
  isCertifiedStudent: boolean;
  reliabilityLevel: ReliabilityType;
  introduce: string;
  reason: string;
}

export interface GroupMember {
  isCaptain: boolean;
  isCertifiedStudent: boolean;
  userId: number;
  nickName: string;
  imageUrl: string;
  reliabilityLevel: ReliabilityType;
}

export interface GroupsResponse {
  totalCount: number;
  currentCount: number;
  currentPage: number;
  totalPage: number;
  contents: Grouping[];
}

export interface GroupDetailResponse extends Grouping {
  myGroup: boolean;
  isCaptain: boolean;
  isScraped: boolean;
  isApplyWaited: boolean;
}

export interface CreateGroupRequest {
  imageUrl: string;
  title: string;
  content: string;
  meetDate: string;
  startTime: string;
  placeName: string;
  placeAddress: string;
  placeLatitude: string;
  placeLongitude: string;
  maxUser: number;
}

export interface CreateGroupResponse {
  groupId: number;
}

export interface ArticleRequest {
  params: { groupId: number };
  article: Pick<Article, 'content' | 'notice' | 'images'>;
}

export interface ArticleDeleteRequest {
  params: {
    groupId: number;
    articleId: number;
  };
}

export interface ArticlesResponse {
  totalCount: number;
  currentCount: number;
  currentPage: number;
  totalPage: number;
  contents: Article[];
}

export interface NoticesResponse extends Array<Notice> {}

export interface CommentRequest {
  params: {
    groupId: number;
    articleId: number;
  };
  payload: {
    content: string;
  };
}

export interface CommentDeleteRequest {
  params: {
    groupId: number;
    articleId: number;
    commentId: number;
  };
}

export interface CommentsReponse {
  comments: Comment[];
}

export interface GroupMembersDeleteRequest {
  params: {
    groupId: number;
  };
}

export interface GroupMembersResponse {
  groupMembers: GroupMember[];
}

export interface ApplyRequest {
  params: {
    groupId: number;
  };
  apply: Pick<Apply, 'introduce' | 'reason'>;
}

export interface ApplyStatusRequest {
  params: {
    groupId: number;
    applyId: number;
    status: ApplyStatusType;
  };
}

export interface AppliesResponse {
  totalCount: number;
  applies: Apply[];
}

export interface ScrapRequest {
  params: {
    groupId: number;
  };
}

export interface EstimateResponse {
  groupMemberList: Array<{
    imageUrl: string;
    isCaptain: boolean;
    nickName: string;
    reliabilityLevel: ReliabilityType;
    userId: number;
  }>;
}
