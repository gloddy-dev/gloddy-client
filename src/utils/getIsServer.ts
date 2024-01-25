export const getIsServer = () => typeof window === 'undefined' && typeof global !== 'undefined';
