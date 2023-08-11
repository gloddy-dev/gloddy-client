export const getLocalCookie = (key: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export const setLocalCookie = (key: string, value: string) => {
  document.cookie = `${key}=${value}; path=/;`;
};
