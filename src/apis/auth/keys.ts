export const Keys = {
  getSchoolSearch: (searchWord: string) => ['getSchoolSearch', searchWord],
  getNicknameDuplicate: (nickname: string) => ['getNicknameDuplicate', nickname],
} as const;
