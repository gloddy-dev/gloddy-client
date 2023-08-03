export const Keys = Object.freeze({
  getGroups: () => ['getGroups'],
  getGroupDetail: (groupId: number) => ['getGroupDetail', groupId],
  getArticles: (groupId: number) => ['getArticles', groupId],
});
