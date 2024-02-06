import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, BackHandler, Dimensions, Linking, Platform } from 'react-native';
import RNRestart from 'react-native-restart'; // Import package from node modules
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

import Error from './Error';
import { SOURCE_URL } from '../config';
import { sendFCMTokenToWebView } from '../utils/sendFCMTokenToWebView';

import { useDidMount } from '@/hooks/useDidMount';
import useWebViewNavigationSetUp from '@/hooks/useWebViewNavigationSetUp';
import { getPermission } from '@/utils/getPermission';
import sendMessageToWebview from '@/utils/sendMessageToWebview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WebViewContainer() {
  useWebViewNavigationSetUp();
  const navigation = useNavigation();
  const params = useRoute().params;
  const webViewRef = useRef(null);
  const { isError, setIsError, onWebViewError } = useAppError();
  const url = params.url ?? SOURCE_URL;
  const edges = params?.edges;

  useDidMount(async () => {
    /* 권한 요청 */
    await sendFCMTokenToWebView(webViewRef);
    await messaging().requestPermission();
  });

  /* 안드로이드 뒤로가기 */
  useDidMount(() => {
    const handleAndroidBackPress = () => {
      if (navigation.canGoBack()) navigation.goBack();
      else {
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
      }

      if (webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', handleAndroidBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleAndroidBackPress);
      };
    }
  });

  /* (iOS)외부 페이지 이동 */
  const onNavigationStateChange = (navState) => {
    if (!navState.url.includes(SOURCE_URL)) {
      Linking.openURL(navState.url).catch((err) => {});
      return false;
    }
  };
  const onShouldStartLoadWithRequest = (navState) => {
    if (!navState.url.includes(SOURCE_URL)) {
      Linking.openURL(navState.url).catch((err) => {});
      return false;
    }
    return true;
  };

  const handleOnLoad = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const userId = await AsyncStorage.getItem('userId');
    sendMessageToWebview(webViewRef, {
      type: 'TOKEN',
      data: { accessToken, refreshToken, userId },
    });
  };

  /* 페이지 이동 */
  const requestOnMessage = async (event) => {
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
              // right: () => { // 어디서 쓰는지 잘 모르겠는데 WARNING 떠서 주석처리
              //   webViewRef.current?.postMessage(
              //     JSON.stringify({type: 'NAVIGATION_TAPPED_RIGHT_BUTTON'}),
              //   );
              // },
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
      case 'AUTH': {
        const { type, token } = data;
        switch (data) {
          case 'LOG_IN':
            await AsyncStorage.setItem('isUserLogin', 'true');
            navigation.replace('BottomTab');
            break;
          case 'LOG_OUT':
            await AsyncStorage.setItem('isUserLogin', 'false');
            navigation.replace('WebViewContainer', {
              url: `${SOURCE_URL}/join?step=1`,
            });
            break;
        }
        break;
      }
      case 'TOKEN': {
        const { accessToken, refreshToken, userId } = data;
        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('refreshToken', refreshToken);
        await AsyncStorage.setItem('userId', `${userId}`);
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
        thirdPartyCookiesEnabled
        sharedCookiesEnabled={true}
        androidHardwareAccelerationDisabled
        onNavigationStateChange={onNavigationStateChange}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        onMessage={requestOnMessage} // 웹뷰 -> 앱으로 통신
        onContentProcessDidTerminate={() => webViewRef.current?.reload()}
        bounces={false}
        onError={onWebViewError}
        webviewDebuggingEnabled
        onLoad={handleOnLoad}
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
