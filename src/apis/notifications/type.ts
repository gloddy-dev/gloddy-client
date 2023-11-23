export interface FCMTokenRequest {
  token: string;
}

type NotificationType = 'APPLY_APPROVE' | 'APPLY_REFUSE' | 'APPLY_CREATE' | 'GROUP_LEAVE';

export type Notification = {
  userId: number;
  redirectId: number;
  content: string;
  type: NotificationType;
};

export interface NotificationResponse {
  notifications: Notification[];
}
