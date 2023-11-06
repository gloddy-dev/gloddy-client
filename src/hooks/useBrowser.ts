import { useDidMount } from './common/useDidMount';
import { useState } from 'react';

export default function useBrowser() {
  const [browser, setBrowser] = useState('');

  useDidMount(() => {
    const agent = navigator.userAgent;
    if (agent.includes('Chrome')) setBrowser('chrome');
    if (agent.includes('Safari')) setBrowser('safari');
  });

  return browser;
}
