import { useCallback } from 'react';

import type { ListeningAppMessageData, ListeningWebviewMessageKey } from './type';

interface UseAppMessageListenerProps {
  targetType: ListeningWebviewMessageKey;
  handler: ({ type, data, ...rest }: ListeningAppMessageData) => void;
}

const useAppMessageListener = ({ targetType, handler }: UseAppMessageListenerProps) => {
  const listener = useCallback(
    ({ data: rawData }: MessageEvent) => {
      const { type, data, ...rest } = JSON.parse(rawData) as ListeningAppMessageData;

      if (targetType !== type) return;
      handler({ type, data, rest });
    },
    [targetType, handler]
  );

  const startListening = () => {
    if (!window.ReactNativeWebView) return;

    document.addEventListener('message', listener as () => void); // android
    window.addEventListener('message', listener); // ios
  };

  const stopListening = () => {
    if (!window.ReactNativeWebView) return;

    document.removeEventListener('message', listener as () => void); // android
    window.removeEventListener('message', listener); // ios
  };

  return { startListening, stopListening };
};

export default useAppMessageListener;
