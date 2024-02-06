import { Pressable, StyleSheet, Text, View } from 'react-native';

import Icon, { IconName } from './Icon';

import theme from '@/styles/theme';

export interface TabBarIconProps {
  icon?: IconName;
  text: string;
  focused?: boolean;
  onPress?(): void;
}

function TabBarIcon({ icon, text, focused, onPress }: TabBarIconProps) {
  const color = focused ? theme.signColors.signBrand : theme.signColors.signTeriary;
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      {({ pressed }) => (
        <View style={[styles.content, { opacity: pressed ? 0.5 : 1 }]}>
          {icon ? <Icon name={icon} color={color} /> : undefined}
          <Text style={[styles.label, { color }]}>{text}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  content: {
    alignItems: 'center',
  },
  label: { fontSize: 12, fontWeight: '500', lineHeight: 18, letterSpacing: 0.2 },
});

export default TabBarIcon;
