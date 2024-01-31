declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage(msg: string): void;
    };
    initMap: () => void;
    dataLayer: Array<Record<string, any>>;
  }
}

export {};
