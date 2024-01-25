export const Keys = Object.freeze({
  getCommunityArticles: (categoryId?: number) => ['getCommunityArticles', categoryId],
  getCommunityArticleDetail: (articleId: number) => ['getCommunityArticleDetail', articleId],
  getCommunityComments: (articleId: number) => ['getCommunityComments', articleId],
  getCommunityReply: (articleId: number, commentId: number) => [
    'getCommunityReply',
    articleId,
    commentId,
  ],
});
