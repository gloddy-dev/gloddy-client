import { useFlipper } from '@react-navigation/devtools';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import OnBoarding from './OnBoarding';
import TabBarNavigator from './TabBarNavigator';
import WebViewContainer from './WebViewContainer';

import { useDidMount } from '@/hooks/useDidMount';
import { setFcmAlert } from '@/utils/setFcmAlert';

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
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="BottomTab" component={TabBarNavigator} />
        <Stack.Screen name="WebViewContainer" component={WebViewContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
