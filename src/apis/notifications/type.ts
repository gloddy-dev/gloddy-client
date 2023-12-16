export interface FCMTokenRequest {
  token: string;
}

type NotificationType =
  | 'APPLY_CREATE'
  | 'APPLY_APPROVE'
  | 'APPLY_REFUSE'
  | 'GROUP_LEAVE'
  | 'GROUP_ARTICLE_CREATE'
  | 'GROUP_APPROACHING_START'
  | 'GROUP_END';

export type Notification = {
  userId: number;
  redirectId: number;
  content: string;
  type: NotificationType;
  image: string;
  createdAt: string;
  title: string;
};

export interface NotificationResponse {
  notifications: Notification[];
}
