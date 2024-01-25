import { getIsServer } from './getIsServer';

export const getIsIOS = () => {
  const isServer = getIsServer();
  if (isServer) return false;

  return navigator.userAgent.match(/ipad|iphone/i) != null;
};
