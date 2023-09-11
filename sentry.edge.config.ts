import { NEXT_PUBLIC_SENTRY_DSN } from '@/constants';
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 1.0 : 0,
});
