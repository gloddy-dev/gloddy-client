export function sendMessageToReactNative(message: string) {
  window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message);
}
