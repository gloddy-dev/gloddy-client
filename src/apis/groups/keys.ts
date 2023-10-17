export const Keys = Object.freeze({
  getGroups: () => ['getGroups'],
  getGroupDetail: (groupId: number) => ['getGroupDetail', groupId],
  getArticles: (groupId: number) => ['getArticles', groupId],
  getArticle: (groupId: number, articleId: number) => ['getArticle', groupId, articleId],
  getComments: (groupId: number, articleId: number) => ['getComments', groupId, articleId],
  getGroupMembers: (groupId: number) => ['getGroupMembers', groupId],
  getNotices: (groupId: number) => ['getNotices', groupId],
  getApplies: (groupId: number) => ['getApplies', groupId],
  getEstimate: (groupId: number) => ['getEstimate', groupId],
});
