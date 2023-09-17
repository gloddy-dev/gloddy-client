export const fallbackLng = 'ko';
export const languages = ['ko', 'en'];
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
