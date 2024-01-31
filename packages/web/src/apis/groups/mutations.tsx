import {
  deleteArticle,
  deleteComment,
  deleteGroupMember,
  deleteScrap,
  patchApply,
  postApply,
  postArticle,
  postComment,
  postCreateGroup,
  postEstimate,
  postScrap,
} from './apis';
import { Keys as GroupsKeys } from './keys';
import { GroupDetailResponse } from './type';
import { MeetingScrapResponse } from '../meeting';
import { Keys as MeetingKeys } from '../meeting/keys';
import FeedbackCompleteModal from '@/app/[lng]/(main)/meeting/participate/feedback/[groupId]/funnels/step3/FeedbackCompleteModal.client';
import useAppRouter from '@/hooks/useAppRouter';
import { useModal } from '@/hooks/useModal';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostCreateGroup = () => {
  const { replace } = useAppRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCreateGroup,
    onSuccess: (data) => {
      queryClient.resetQueries({ queryKey: GroupsKeys.getGroups() });
      replace(`/grouping/${data.groupId}`);
    },
  });
};

export const usePostArticle = (groupId: number) => {
  const { replace } = useAppRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postArticle,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getArticles(groupId) });
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getNotices(groupId) });
      replace(`/grouping/${groupId}/articles/${data.articleId}`);
    },
  });
};

export const useDeleteArticle = (groupId: number) => {
  const { replace } = useAppRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getArticles(groupId) });
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getNotices(groupId) });
      replace(`/grouping/${groupId}?tab=articles`);
    },
  });
};

export const usePostComment = (groupId: number, articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getComments(groupId, articleId) });
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getArticle(groupId, articleId) });
    },
  });
};

export const useDeleteComment = (groupId: number, articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getComments(groupId, articleId) });
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getArticle(groupId, articleId) });
    },
  });
};

export const usePostApply = (groupId: number) => {
  const { replace } = useAppRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getGroupDetail(groupId) });
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getGroupMembers(groupId) });
      replace('/meeting/participate?tab=waiting');
    },
  });
};

export const usePatchApply = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchApply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getApplies(groupId) });
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getGroupDetail(groupId) });
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getGroupMembers(groupId) });
    },
  });
};

export const usePostScrap = (groupId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postScrap,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: GroupsKeys.getGroupDetail(groupId) });
      const previousData = queryClient.getQueryData<GroupDetailResponse>(
        GroupsKeys.getGroupDetail(groupId)
      );
      queryClient.setQueryData<Partial<GroupDetailResponse>>(GroupsKeys.getGroupDetail(groupId), {
        ...previousData,
        isScraped: true,
      });

      return { previousData };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getGroupDetail(groupId) });
    },
  });
};

export const useDeleteScrapGroups = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteScrap,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: GroupsKeys.getGroupDetail(groupId) });

      const previousData = queryClient.getQueryData<GroupDetailResponse>(
        GroupsKeys.getGroupDetail(groupId)
      );

      queryClient.setQueryData<Partial<GroupDetailResponse>>(GroupsKeys.getGroupDetail(groupId), {
        ...previousData,
        isScraped: false,
      });

      return { previousData };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getGroupDetail(groupId) });
    },
  });
};

export const useDeleteScrapMeeting = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteScrap,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: MeetingKeys.getMeetingScraps() });

      const previousData = queryClient.getQueryData<MeetingScrapResponse>(
        MeetingKeys.getMeetingScraps()
      );

      queryClient.setQueryData<Partial<MeetingScrapResponse>>(MeetingKeys.getMeetingScraps(), {
        ...previousData,
        contents: previousData?.contents.filter((it) => it.groupId !== groupId),
      });

      return { previousData };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getGroupDetail(groupId) });
    },
  });
};

export const useDeleteGroupMember = (groupId: number) => {
  const queryClient = useQueryClient();
  const { push } = useAppRouter();

  return useMutation({
    mutationFn: deleteGroupMember,
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: GroupsKeys.getGroups() });
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getGroupDetail(groupId) });
      queryClient.invalidateQueries({ queryKey: GroupsKeys.getGroupMembers(groupId) });
      push('/grouping');
    },
  });
};

export const usePostEstimate = () => {
  const { push } = useAppRouter();
  const { open } = useModal({ isUnmountExit: false });

  return useMutation({
    mutationFn: postEstimate,
    onSuccess: () => {
      open(({ exit }) => <FeedbackCompleteModal onClose={exit} />);
      push('/meeting/participate?tab=participating');
    },
  });
};
