export const formatBirthTyping = (birth: string) => {
  if (birth.length > 5) return `${birth.slice(0, 4)}/${birth.slice(4, 6)}/${birth.slice(6, 8)}`;
  if (birth.length > 3) return `${birth.slice(0, 4)}/${birth.slice(4, 6)}`;
  return birth;
};

export const formatBirthBackspace = (birth: string) => {
  if (birth.length > 6) return `${birth.slice(0, 4)}/${birth.slice(4, 6)}/${birth.slice(6, 8)}`;
  if (birth.length > 4) return `${birth.slice(0, 4)}/${birth.slice(4, 6)}`;
  return birth;
};
