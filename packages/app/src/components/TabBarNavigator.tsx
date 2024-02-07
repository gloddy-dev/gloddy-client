import { useMemo } from 'react';

import BottomTabNavigator from './BottomTabNavigator';

import { SOURCE_URL } from '@/config';

export const WEBVIEW_SCREENS = [
  { name: 'Matching', url: `${SOURCE_URL}/grouping` },
  { name: 'Union', url: `${SOURCE_URL}/meeting/participate` },
  { name: 'Community', url: `${SOURCE_URL}/community` },
  { name: 'Profile', url: `${SOURCE_URL}/profile` },
];

function TabBarNavigator() {
  const Screens = useMemo(() => WEBVIEW_SCREENS.map(BottomTabNavigator.createScreen), []);

  return <BottomTabNavigator>{Screens}</BottomTabNavigator>;
}

export default TabBarNavigator;
