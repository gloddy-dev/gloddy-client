import { RefObject } from 'react';
import WebView from 'react-native-webview';

export default function sendMessageToWebview(
  webViewRef: RefObject<WebView>,
  message: {
    type: string;
    data: any;
  },
) {
  webViewRef.current?.postMessage(JSON.stringify(message));
}
