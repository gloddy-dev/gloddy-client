import {RefObject} from 'react';
import WebView from 'react-native-webview';
import messaging from '@react-native-firebase/messaging';
import sendMessageToWebview from './sendMessageToWebview';

export async function sendFCMTokenToWebView(webViewRef: RefObject<WebView>) {
  try {
    const token = await messaging().getToken();
    sendMessageToWebview(
      webViewRef,
      JSON.stringify({type: 'FCM_TOKEN', data: token}),
    );
  } catch (error) {
    console.log(error);
  }
}
