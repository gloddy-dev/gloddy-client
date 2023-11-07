export interface FCMTokenRequest {
  token: string;
}

type NotificationType = 'APPLY_APPROVE' | 'APPLY_REFUSE' | 'APPLY_CREATE' | 'GROUP_LEAVE';

export interface NotificationResponse {
  userId: number;
  redirectId: number;
  content: string;
  type: NotificationType;
}
