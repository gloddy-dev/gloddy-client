import { getIsServer } from './getIsServer';

export const getIsApp = () => {
  let isApp = false;
  const isServer = getIsServer();

  if (!isServer && window.ReactNativeWebView) {
    isApp = true;
  }
  return isApp;
};
