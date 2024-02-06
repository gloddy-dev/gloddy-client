import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useCallback } from 'react';

interface TabBarPressProps extends Pick<BottomTabBarProps, 'navigation'> {
  name: string;
}

export default function useTabBarPress() {
  return useCallback(({ name, navigation }: TabBarPressProps) => {
    navigation.navigate(name);
  }, []);
}
