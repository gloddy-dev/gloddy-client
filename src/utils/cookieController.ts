export const getLocalCookie = (key: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);
  if (parts.length === 3) return parts.pop()?.split(';').shift();
};

export const setLocalCookie = (key: string, value: string, options?: { expires?: Date }) => {
  document.cookie = `${key}=${value}; path=/; ${
    options?.expires ? `expires=${options.expires.toUTCString()}` : ''
  }`;
};
