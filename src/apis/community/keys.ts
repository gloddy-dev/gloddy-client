export const Keys = Object.freeze({
  getCommunityArticles: (categoryId?: number) => ['getCommunityArticles', categoryId],
  getCommunityArticleDetail: (articleId: number) => ['getCommunityArticleDetail', articleId],
  getCommunityArticleComments: (articleId: number) => ['getCommunityArticleCommnets', articleId],
});
