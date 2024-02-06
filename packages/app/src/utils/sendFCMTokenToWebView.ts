import messaging from '@react-native-firebase/messaging';
import { RefObject } from 'react';
import WebView from 'react-native-webview';

import sendMessageToWebview from './sendMessageToWebview';

export async function sendFCMTokenToWebView(webViewRef: RefObject<WebView>) {
  try {
    const token = await messaging().getToken();
    sendMessageToWebview(webViewRef, { type: 'FCM_TOKEN', data: token });
  } catch (error) {
    console.log(error);
  }
}
