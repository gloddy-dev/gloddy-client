export const getLocalCookie = (key: string) => {
  if (typeof document === 'undefined') return;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);

  return parts.pop()?.split(';').shift();
};

export const setLocalCookie = (key: string, value: string, options?: { expires?: Date }) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${key}=${value}; path=/; ${
    options?.expires ? `expires=${options.expires.toUTCString()}` : ''
  }`;
};
