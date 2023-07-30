export type ListeningWebviewMessageKey = 'FCM_TOKEN' | 'APP_VERSION';

export type PostWebviewMessageKey = 'APP_VERSION';

export interface ListeningAppMessageData<T = string> {
  type: ListeningWebviewMessageKey;
  data: T;
  [key: string]: unknown;
}

export interface PostAppMessageData<T = unknown> {
  type: PostWebviewMessageKey;
  data: T;
  [key: string]: unknown;
}
