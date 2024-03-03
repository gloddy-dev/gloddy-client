export const fallbackLng = 'en';
export const languages = ['ko', 'en', 'zh-CN', 'zh-TW'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lng: string = fallbackLng, ns: string = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
