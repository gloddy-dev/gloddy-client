import { getIsApp } from '@/utils/getIsApp';
import sendMessageToReactNative from '@/utils/sendMessageToReactNative';
import { useRouter } from 'next/navigation';

const useAppRouter = () => {
  const isApp = getIsApp();
  const router = useRouter();

  const push = (path: string, scroll?: boolean) => {
    if (isApp)
      return sendMessageToReactNative({
        type: 'ROUTER_EVENT',
        data: {
          path,
          type: 'PUSH',
        },
      });
    return router.push(path, { scroll });
  };

  const back = () => {
    if (isApp)
      return sendMessageToReactNative({
        type: 'ROUTER_EVENT',
        data: {
          type: 'BACK',
        },
      });
    return router.back();
  };

  const replace = (path: string) => {
    if (isApp)
      return sendMessageToReactNative({
        type: 'ROUTER_EVENT',
        data: {
          path,
          type: 'REPLACE',
        },
      });
    return router.replace(path);
  };

  const refresh = () => {
    if (isApp)
      return sendMessageToReactNative({
        type: 'ROUTER_EVENT',
        data: {
          type: 'REFRESH',
        },
      });
    return router.refresh();
  };

  return { push, back, replace, refresh };
};

export default useAppRouter;
