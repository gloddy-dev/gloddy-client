import {
  CreateArticleRequest,
  GetArticlesRequest,
  GetArticlesResponse,
} from '@/apis/community/type';
import privateApi from '@/apis/config/privateApi';

export const getCommunityArticles = ({ categoryId, pageParam }: GetArticlesRequest) => {
  return privateApi.get<GetArticlesResponse>(
    categoryId
      ? `/communities/articles?categoryId=${categoryId}&page=${pageParam}`
      : `/communities/articles?page=${pageParam}`
  );
};

export const postCreateCommunityArticle = (CreateCommunityData: CreateArticleRequest) => {
  return privateApi.post<CreateArticleRequest>('/communities/articles/create', CreateCommunityData);
};
