import {useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

interface TabBarPressProps extends Pick<BottomTabBarProps, 'navigation'> {
  name: string;
}

export default function useTabBarPress() {
  return useCallback(({name, navigation}: TabBarPressProps) => {
    navigation.navigate(name);
  }, []);
}
