import {StackHeaderProps} from '@react-navigation/stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Icon from './Icon';

import theme from '@/styles/theme';

function Header({navigation, route}: StackHeaderProps) {
  const {top: topInset} = useSafeAreaInsets();
  const {title, right} = route.params;

  return (
    <View style={[styles.wrapper, {paddingTop: topInset}]}>
      <View style={styles.layout}>
        <Pressable style={styles.iconButton} onPress={navigation.goBack}>
          <Icon name="ArrowBack" color={theme.signColors.signPrimary} />
        </Pressable>
        {title ? <Text style={styles.title}>{title}</Text> : undefined}
      </View>
      <View style={styles.layout}>
        {right ? (
          <Pressable style={styles.iconButton} onPress={right}>
            <Icon name="MoreHorizontal" color={theme.signColors.signPrimary} />
          </Pressable>
        ) : undefined}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.signColors.signPrimary,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Header;
