import privateApi from './privateApi';

export function replaceAccessTokenForRequestInstance(token: string) {
  privateApi.defaults.headers.common['accessToken'] = token;
}
