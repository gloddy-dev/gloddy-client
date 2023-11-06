import { useDidMount } from './common/useDidMount';
import { getMobileDivce } from '@/utils/getMobileDevice';
import { useState } from 'react';

export default function useBrowser() {
  const [browser, setBrowser] = useState('');
  const mobileDevice = getMobileDivce();

  useDidMount(() => {
    const agent = navigator.userAgent;
    if (agent.includes('Chrome')) setBrowser('chrome');
    if (agent.includes('Safari') || mobileDevice === 'ios') setBrowser('safari');
  });

  return browser;
}
