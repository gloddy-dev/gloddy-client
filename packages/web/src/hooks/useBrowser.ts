import { useDidMount } from './common/useDidMount';
import { useState } from 'react';

export default function useBrowser() {
  const [browser, setBrowser] = useState('');

  useDidMount(() => {
    if (navigator.userAgent.match(/Chrome/i) != null) setBrowser('chrome');
    else if (navigator.userAgent.match(/ipad|iphone|Safari/i)) setBrowser('safari');
  });

  return browser;
}
