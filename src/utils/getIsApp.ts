export const getIsApp = () => {
  let isApp = false;
  if (typeof window !== 'undefined' && window.ReactNativeWebView) {
    isApp = true;
  }
  return isApp;
};
