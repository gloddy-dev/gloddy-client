import { CommunityArticlesResponse, CreateArticleRequest } from '@/apis/community/type';
import privateApi from '@/apis/config/privateApi';

export const getCommunityArticles = (page: number) =>
  privateApi.get<CommunityArticlesResponse>(`/communities/articles?page=${page}`);

export const postCreateCommunityArticle = (CreateCommunityData: CreateArticleRequest) => {
  return privateApi.post<CreateArticleRequest>('/communities/articles/create', CreateCommunityData);
};
