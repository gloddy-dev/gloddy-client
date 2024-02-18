import { useState } from 'react';

import { useDidMount } from './common/useDidMount';

export default function useBrowser() {
  const [browser, setBrowser] = useState('');

  useDidMount(() => {
    if (navigator.userAgent.match(/Chrome/i) != null) setBrowser('chrome');
    else if (navigator.userAgent.match(/ipad|iphone|Safari/i)) setBrowser('safari');
  });

  return browser;
}
