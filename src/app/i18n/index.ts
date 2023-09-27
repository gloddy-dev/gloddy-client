import { getOptions } from './settings';
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

const initI18next = async (lng: string, ns: string) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function serverTranslation(ns: string, options?: { keyPrefix?: string }) {
  const { cookies } = await import('next/headers');
  const cookiesStore = cookies();
  const cookieLng = cookiesStore.get('i18next')?.value || 'en';
  const i18nextInstance = await initI18next(cookieLng, ns);

  return {
    t: i18nextInstance.getFixedT(cookieLng, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18nextInstance,
  };
}
