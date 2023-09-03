function sendMessageToReactNative(message: string) {
  window.ReactNativeWebView.postMessage(message);
}
