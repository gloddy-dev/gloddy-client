export const makeFileToBlob = (file: File): string => {
  if (!file) return '';
  const fileURL = URL.createObjectURL(file);
  return fileURL;
};
