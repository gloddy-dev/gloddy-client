import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

import { SENTRY_DSN } from '@/constants';

export const useSentry = () => {
  useEffect(() => {
    Sentry.init({
      dsn: SENTRY_DSN,
      enabled: process.env.STAGE === 'production',
      allowUrls: ['https://gloddy.vercel.app'],
    });
  }, []);
};
