export const getLangauage = async () => {
  const { cookies } = await import('next/headers');
  const cookiesStore = cookies();
  const lng = cookiesStore.get('i18next')?.value || 'en';

  return lng;
};
