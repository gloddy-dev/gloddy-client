export const formatNumber = (phoneNumber: string): string => {
  if (phoneNumber.length > 6)
    return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3, 7)} - ${phoneNumber.slice(7)}`;
  if (phoneNumber.length > 2) return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3)}`;
  return phoneNumber;
};

export const formatNumberBackSpace = (phoneNumber: string): string => {
  if (phoneNumber.length === 3) return `${phoneNumber.slice(0, 3)}`;
  if (phoneNumber.length === 7) return `${phoneNumber.slice(0, 7)}`;
  return phoneNumber;
};

export const formatWithoutHyphen = (phoneNumber: string): string => {
  return phoneNumber.replace(/[-\s]/g, '');
};

export const formatWithoutSpace = (phoneNumber: string): string => {
  return phoneNumber.replace(/\s/g, '');
};
