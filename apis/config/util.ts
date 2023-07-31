import privateApi from './privateApi.client';

export function replaceAccessTokenForRequestInstance(token: string) {
  privateApi.defaults.headers.common['accessToken'] = token;
}
