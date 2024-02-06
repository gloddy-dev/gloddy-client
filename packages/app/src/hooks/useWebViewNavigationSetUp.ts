import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

import Header from '@/components/Header';

type WebViewRouteParams = {
  title?: string;
};

export default function useWebViewNavigationSetUp() {
  const navigation = useNavigation();
  const params = useRoute<RouteProp<Record<string, WebViewRouteParams>, string>>().params;

  useLayoutEffect(() => {
    if (!params.title) return;

    navigation.setOptions({
      headerShown: true,
      title: params.title,
      header: Header,
    });
  }, [params, navigation]);
}
