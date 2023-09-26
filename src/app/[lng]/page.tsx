'use client';
import { cookieName } from '../i18n/settings';
import { useDidMount } from '@/hooks/common/useDidMount';
import { setLocalCookie } from '@/utils/cookieController';
import { afterDay60 } from '@/utils/date';
import { useRouter } from 'next/navigation';

interface HomeProps {
  params: {
    lng: string;
  };
}

export default function Home({ params: { lng } }: HomeProps) {
  const router = useRouter();

  const listener = async (event: any) => {
    console.log(event); // 모바일에서 보낸 데이터 확인하기 위한 로그
    const response = await JSON.parse(event.data);
    const { data } = response;
    setLocalCookie(cookieName, data, {
      expires: afterDay60,
    });

    router.replace(`/${lng}/grouping`);
  };

  useDidMount(() => {
    if (window.ReactNativeWebView) {
      document.addEventListener('message', listener); /* Android */
      window.addEventListener('message', listener); /* iOS */

      return () => {
        document.removeEventListener('message', listener);
        window.removeEventListener('message', listener);
      };
    } else {
      router.replace(`/${lng}/grouping`);
    }
  });
}
