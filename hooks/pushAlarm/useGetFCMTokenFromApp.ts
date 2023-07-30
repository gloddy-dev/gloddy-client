import useListeningAppMessage from '../bridge/useListeningAppMessage';
import useTokenStore from '@/store/useTokenStore';

const useGetFCMTokenFromApp = () => {
  const { setFcmToken } = useTokenStore();

  useListeningAppMessage({
    targetType: 'FCM_TOKEN',
    handler: ({ data }) => {
      setFcmToken(data as string);
    },
  });
};

export default useGetFCMTokenFromApp;
