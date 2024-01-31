import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import theme from '@/styles/theme';
import useTabBarPress from '@/hooks/useTabBarPress';
import TabBarIcon from './TabBarIcon';

const ScreenIconName = {
  Matching: 'Matching',
  Union: 'Union',
  Profile: 'Profile',
  Community: 'Community',
} as const;

export type ScreenIconNameKey = keyof typeof ScreenIconName;

const isKeyScreenIconName = (value: string) => value in ScreenIconName;

const getScreenIcon = (value: string) =>
  isKeyScreenIconName(value)
    ? ScreenIconName[value as ScreenIconNameKey]
    : undefined;

function TabBar({state, navigation, descriptors}: BottomTabBarProps) {
  const onPress = useTabBarPress();
  const renderTabBarButton = useCallback(
    (name: string, index: number) => (
      <TabBarIcon
        icon={getScreenIcon(name)}
        focused={index === state.index}
        text={state.routeNames[index]}
        onPress={() => onPress({name, navigation})}
        key={`${index}`}
      />
    ),
    [state],
  );

  return (
    <Shadow
      startColor="#00000010"
      offset={[0, 0]}
      distance={4}
      style={styles.block}
      containerStyle={styles.container}>
      <View style={styles.wrapper}>
        <SafeAreaView edges={['bottom']}>
          <View style={styles.row}>
            {state.routes.map(({name}, i) => renderTabBarButton(name, i))}
          </View>
        </SafeAreaView>
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  block: {width: '100%'},
  container: {backgroundColor: theme.colors.white},
  wrapper: {
    backgroundColor: theme.colors.white,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default TabBar;
