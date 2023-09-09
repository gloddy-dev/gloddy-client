export const formatDateDTO = (birth: string) => {
  return birth.split('/').join('-');
};
