import { getIsAndroid } from './getIsAndroid';
import { getIsIOS } from './getIsIOS';

export const getIsApp = () => {
  const isIOS = getIsIOS();
  const isAndroid = getIsAndroid();
  if (isIOS || isAndroid) return true;

  return false;
};
