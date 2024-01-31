/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { getOptions, languages } from './settings';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useParams } from 'next/navigation';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
// import LocizeBackend from 'i18next-locize-backend'

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)
    )
  )
  // .use(LocizeBackend) // locize backend could be used on client side, but prefer to keep it in sync with server side
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation(ns: string, options: { keyPrefix?: string } = {}) {
  const params = useParams() as { lng: string };
  const ret = useTranslationOrg(ns, options);

  if (runsOnServerSide) {
    ret.i18n.changeLanguage(params.lng);
  }

  return ret;
}
