import { useDidMount } from './common/useDidMount';

import { postFCMToken } from '@/apis/notifications';
import { getIsApp } from '@/utils/getIsApp';

export default function useListenMessageToReactNative() {
  const isapp = getIsApp();
  useDidMount(() => {
    if (!isapp) return;
    const listener = async (event: any) => {
      const { type, data } = JSON.parse(event.data);
      switch (type) {
        case 'FCM_TOKEN':
          postFCMToken({ token: data });
          break;
      }
    };

    document.addEventListener('message', listener);
    window.addEventListener('message', listener);
    return () => {
      document.removeEventListener('message', listener);
      window.removeEventListener('message', listener);
    };
  });
}
