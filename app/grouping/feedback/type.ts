export type PraiseType = 'calm' | 'kind' | 'active' | 'humor';

export type PraiseUser = {
  id: number;
  type: PraiseType;
};

export type FeedbackRequestType = {
  praiseUserList: PraiseUser[];
  mateId: number;
  comment: string;
};

export interface User {
  id: number;
  name: string;
  imageUrl: string;
}
