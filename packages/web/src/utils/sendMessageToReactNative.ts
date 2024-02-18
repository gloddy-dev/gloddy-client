interface SendMessageToReactNativeProps {
  type: string;
  data?: any;
}

export const sendMessageToReactNative = ({ type, data }: SendMessageToReactNativeProps) => {
  window.ReactNativeWebView &&
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        data,
        type,
      })
    );
};
