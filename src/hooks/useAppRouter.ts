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
        },
      });
    return router.push(path, { scroll });
  };

  const back = () => {
    if (isApp)
      return sendMessageToReactNative({
        type: 'ROUTER_EVENT',
        data: {
          path: 'back',
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
        },
      });
    return router.replace(path);
  };

  const reload = () => {
    if (isApp)
      return sendMessageToReactNative({
        type: 'ROUTER_EVENT',
        data: {
          path: 'reload',
        },
      });
    return router.refresh();
  };

  return { push, back, replace, reload };
};

export default useAppRouter;
