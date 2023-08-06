export const Keys = Object.freeze({
  getGroups: () => ['getGroups'],
  getGroupDetail: (groupId: number) => ['getGroupDetail', groupId],
  getArticles: (groupId: number) => ['getArticles', groupId],
  getArticle: (groupId: number, articleId: number) => ['getArticle', groupId, articleId],
  getComments: (groupId: number, articleId: number) => ['getComments', groupId, articleId],
});
