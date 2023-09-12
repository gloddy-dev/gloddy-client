declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage(msg: string): void;
    };
    initMap: () => void;
  }
}

export {};
