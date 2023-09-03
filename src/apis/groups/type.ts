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
  reliabilityLevel: ReliabilityType;
}

export interface GroupMembersResponse {
  groupMembers: GroupMember[];
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

export interface ApplyRequest {
  groupId: number;
  apply: Pick<Apply, 'introduce' | 'reason'>;
}

export interface ApplyPatchRequest {
  groupId: number;
  applyId: number;
  status: ApplyStatusType;
}

export interface ApplyResponse {
  applyId: number;
}

export interface AppliesResponse {
  totalCount: number;
  applies: Apply[];
}

export interface EstimateResponse {
  groupMemberList: Array<{
    imageUrl: string;
    name: string;
  }>;
}
