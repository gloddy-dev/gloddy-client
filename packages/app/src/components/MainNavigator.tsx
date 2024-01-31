import React from 'react';

import {useDidMount} from '@/hooks/useDidMount';
import {setFcmAlert} from '@/utils/setFcmAlert';
import {useFlipper} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import OnBoarding from './OnBoarding';
import WebViewContainer from './WebViewContainer';
import TabBarNavigator from './TabBarNavigator';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  useDidMount(() => {
    setFcmAlert(navigationRef);
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          presentation: 'transparentModal',
        }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="BottomTab" component={TabBarNavigator} />
        <Stack.Screen name="WebViewContainer" component={WebViewContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
