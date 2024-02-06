import * as Sentry from '@sentry/nextjs';

import { SENTRY_DSN } from '@/constants';

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 1.0 : 0,
});
