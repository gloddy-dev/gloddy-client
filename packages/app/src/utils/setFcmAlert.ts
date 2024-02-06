import messaging from '@react-native-firebase/messaging';
import { NavigationContainerRefWithCurrent, StackActions } from '@react-navigation/native';
import { Alert } from 'react-native';

import { getNotificationPath } from './getNotificationPath';

import { SOURCE_URL } from '@/config';

type RemoteMessageType = {
  data: {
    type: string;
    title: string;
    content: string;
    redirectId: string;
  };
};

export const setFcmAlert = (
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>
) => {
  const unsubscribe = messaging().onMessage((remoteMessage) => {
    const { data } = remoteMessage;
    const { type, title, content, redirectId } = data as RemoteMessageType['data'];

    const path = getNotificationPath(type, Number(redirectId));

    Alert.alert(title, content, [
      {
        text: 'You have received a notification.',
        onPress: () => {
          navigationRef.dispatch(
            StackActions.push('WebViewContainer', {
              url: `${SOURCE_URL}${path}`,
            })
          );
        },
      },
    ]);
  });

  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message handled in the background!', remoteMessage);
  });
  return unsubscribe;
};
