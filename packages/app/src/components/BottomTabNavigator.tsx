import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {PropsWithChildren, useMemo} from 'react';
import WebViewContainer from './WebViewContainer';
import TabBar from './TabBar';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator({children}: PropsWithChildren) {
  const props = useMemo(
    () => ({
      tabBar: (props: BottomTabBarProps) => <TabBar {...props} />,
      screenOptions: {
        headerShown: false,
        lazy: false,
      },
    }),
    [],
  );
  return <BottomTab.Navigator {...props}>{children}</BottomTab.Navigator>;
}

BottomTabNavigator.createScreen = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => (
  <BottomTab.Screen
    name={name}
    component={WebViewContainer}
    initialParams={{url, edges: ['top']}}
    key={`bottom-tab-nav-${name}`}
  />
);

export default BottomTabNavigator;
