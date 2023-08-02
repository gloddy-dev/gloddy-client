export const Keys = Object.freeze({
  getGroups: () => ['getGroups'],
  getGroup: (groupId: number) => ['getGroup', groupId],
  getArticles: (groupId: number) => ['getArticles', groupId],
});
