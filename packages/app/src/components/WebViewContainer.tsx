import messaging from '@react-native-firebase/messaging';
import { RouteProp, StackActions, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, BackHandler, Dimensions, Linking, Platform } from 'react-native';
import RNRestart from 'react-native-restart';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView, { WebViewMessageEvent, WebViewNavigation } from 'react-native-webview';

import Error from './Error';
import { SOURCE_URL } from '../config';
import { sendFCMTokenToWebView } from '../utils/sendFCMTokenToWebView';

import { useDidMount } from '@/hooks/useDidMount';
import { getPermission } from '@/utils/getPermission';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type WebViewParams = {
  url?: string;
  edges?: any[];
  title?: string;
};

export default function WebViewContainer() {
  const navigation = useNavigation();
  const params = useRoute<RouteProp<{ params: WebViewParams }, 'params'>>().params;
  const webViewRef = useRef<WebView>(null);
  const { isError, setIsError, onWebViewError } = useAppError();
  const [canGoBackInWebView, setCanGoBackInWebView] = useState(false);
  const url = params.url ?? SOURCE_URL;

  useDidMount(async () => {
    /* 권한 요청 */
    await sendFCMTokenToWebView(webViewRef);
    await messaging().requestPermission();
  });

  // Android 뒤로가기 버튼 이벤트 처리
  useEffect(() => {
    if (Platform.OS !== 'android') return;

    const handleAndroidBackPress = () => {
      console.log('back pushed ' + canGoBackInWebView);

      if (canGoBackInWebView && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      } else if (navigation.canGoBack()) {
        navigation.goBack();
        return true;
      } else {
        Alert.alert(
          'Hold on!(잠시만요!)',
          'Are you sure you want to quit the program?(앱을 종료하시겠습니까?)',
          [
            {
              text: 'Cancel(취소)',
              onPress: () => null,
            },
            { text: 'Confirm(확인)', onPress: () => BackHandler.exitApp() },
          ]
        );
        return true;
      }
    };

    BackHandler.addEventListener('hardwareBackPress', handleAndroidBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleAndroidBackPress);
    };

    /**
     * addEventListener로 등록된 handleAndroidBackPress가 생성시의 클로저 환경을 유지하기 때문에
     * canGoBackInWebView의 상태를 추적하기 위해 의존성 배열에 canGoBackInWebView와 navigation추가
     */
  }, [canGoBackInWebView, navigation]);

  const onNavigationStateChange = (navState: WebViewNavigation) => {
    setCanGoBackInWebView(navState.canGoBack);
  };

  const onShouldStartLoadWithRequest = (navState: WebViewNavigation) => {
    if (SOURCE_URL && !navState.url.includes(SOURCE_URL)) {
      Linking.openURL(navState.url).catch((err) => {});
      return false;
    }
    return true;
  };

  /* 페이지 이동 */
  const requestOnMessage = async (event: WebViewMessageEvent) => {
    const nativeEvent = JSON.parse(event.nativeEvent.data);
    const { type, data } = nativeEvent;
    switch (type) {
      case 'ROUTER_EVENT': {
        const { path, type: pathType, title } = data;
        switch (pathType) {
          case 'PUSH': {
            const pushAction = StackActions.push('WebViewContainer', {
              url: `${SOURCE_URL}${path}`,
              title,
              edges: title ? ['bottom'] : [],
            });
            navigation.dispatch(pushAction);
            break;
          }
          case 'BACK': {
            const popAction = StackActions.pop(1);
            navigation.dispatch(popAction);
            break;
          }
          case 'REPLACE': {
            const replaceAction = StackActions.replace('WebViewContainer', {
              url: `${SOURCE_URL}${path}`,
            });
            navigation.dispatch(replaceAction);
            break;
          }
          case 'RESET': {
            RNRestart.Restart();
            break;
          }
        }
        break;
      }
      case 'GET_PERMISSION': {
        switch (data) {
          case 'IMAGE': {
            await getPermission('camera');
            await getPermission('photoLibrary');
            break;
          }
        }
        break;
      }
    }
  };

  if (isError) {
    return (
      <Error
        reload={() => {
          webViewRef.current?.reload();
          RNRestart.Restart();
          setIsError(false);
        }}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <WebView
        style={{
          flex: 1,
          width: windowWidth,
          height: windowHeight,
        }}
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ uri: url }}
        overScrollMode="never"
        pullToRefreshEnabled
        thirdPartyCookiesEnabled={true}
        sharedCookiesEnabled={true}
        onNavigationStateChange={onNavigationStateChange}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        onMessage={requestOnMessage} // 웹뷰 -> 앱으로 통신
        onContentProcessDidTerminate={() => webViewRef.current?.reload()}
        bounces={false}
        onError={onWebViewError}
        webviewDebuggingEnabled
      />
    </SafeAreaView>
  );
}

const useAppError = () => {
  const [isError, setIsError] = useState(false);

  const onWebViewError = () => {
    setIsError(true);
  };

  return { isError, setIsError, onWebViewError };
};
