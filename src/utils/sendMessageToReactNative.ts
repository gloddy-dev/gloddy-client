interface SendMessageToReactNativeProps {
  type: string;
  data?: any;
}
const sendMessageToReactNative = ({ type, data }: SendMessageToReactNativeProps) => {
  window.ReactNativeWebView &&
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        data,
        type,
      })
    );
};

export default sendMessageToReactNative;
