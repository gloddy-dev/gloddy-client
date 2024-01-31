import {Button, Text, View} from 'react-native';
import theme from '../styles/theme';

interface Props {
  reload: () => void;
}

function Error({reload}: Props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
      }}>
      <View style={{height: '30%'}} />
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 24,
        }}>
        알 수 없는 에러가 발생했어요.
      </Text>
      <Text style={{color: theme.colors.gray5, fontSize: 16, marginBottom: 12}}>
        네트워크 상태가 올바른지 확인해주세요.
      </Text>
      <Text style={{color: theme.colors.gray5, fontSize: 12}}>
        문제가 지속된다면 gloddy.korea@gmail.com으로 문의해주세요.
      </Text>

      <View style={{height: '40%'}} />
      <Button
        title="다시 시도하기"
        onPress={reload}
        color={theme.colors.primary}
      />
    </View>
  );
}

export default Error;
