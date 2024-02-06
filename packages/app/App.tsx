import React from 'react';
import { StatusBar, View } from 'react-native';
import CodePush from 'react-native-code-push';

import MainNavigator from './src/components/MainNavigator';

function App() {
  return (
    <>
      <StatusBar
        animated={false}
        backgroundColor="white"
        translucent={false}
        hidden={false}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <MainNavigator />
      </View>
    </>
  );
}

const codePushOptions = {
  updateDialog: {
    title: 'New Version(새로운 버전)',
    optionalUpdateMessage: 'Update available. Install?(업데이트가 있습니다. 설치하시겠습니까?)',
    optionalInstallButtonLabel: 'Yes (네)',
    optionalIgnoreButtonLabel: '아니오 (No)',
  },
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
};

const AppWithCodePush = __DEV__ ? App : CodePush(codePushOptions)(App);

export default AppWithCodePush;
