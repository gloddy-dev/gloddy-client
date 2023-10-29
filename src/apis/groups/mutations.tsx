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
import { useRouter } from 'next/navigation';

export const usePostCreateGroup = () => {
  const { replace } = useAppRouter();
  const queryClient = useQueryClient();

  return useMutation(postCreateGroup, {
    onSuccess: (data) => {
      queryClient.resetQueries(GroupsKeys.getGroups());
      replace(`/grouping/${data.groupId}`);
    },
  });
};

export const usePostArticle = (groupId: number) => {
  const { replace } = useAppRouter();
  const queryClient = useQueryClient();

  return useMutation(postArticle, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(GroupsKeys.getArticles(groupId));
      queryClient.invalidateQueries(GroupsKeys.getNotices(groupId));
      replace(`/grouping/${groupId}/articles/${data.articleId}`);
    },
  });
};

export const useDeleteArticle = (groupId: number) => {
  const { replace } = useAppRouter();
  const queryClient = useQueryClient();

  return useMutation(deleteArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(GroupsKeys.getArticles(groupId));
      queryClient.invalidateQueries(GroupsKeys.getNotices(groupId));
      replace(`/grouping/${groupId}?tab=articles`);
    },
  });
};

export const usePostComment = (groupId: number, articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(GroupsKeys.getComments(groupId, articleId));
      queryClient.invalidateQueries(GroupsKeys.getArticle(groupId, articleId));
    },
  });
};

export const useDeleteComment = (groupId: number, articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(GroupsKeys.getComments(groupId, articleId));
      queryClient.invalidateQueries(GroupsKeys.getArticle(groupId, articleId));
    },
  });
};

export const usePostApply = (groupId: number) => {
  const { replace } = useAppRouter();
  const queryClient = useQueryClient();

  return useMutation(postApply, {
    onSuccess: () => {
      queryClient.invalidateQueries(GroupsKeys.getGroupDetail(groupId));
      queryClient.invalidateQueries(GroupsKeys.getGroupMembers(groupId));
      replace('/meeting/participate?tab=waiting');
    },
  });
};

export const usePatchApply = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation(patchApply, {
    onSuccess: () => {
      queryClient.invalidateQueries(GroupsKeys.getApplies(groupId));
      queryClient.invalidateQueries(GroupsKeys.getGroupDetail(groupId));
      queryClient.invalidateQueries(GroupsKeys.getGroupMembers(groupId));
    },
  });
};

export const usePostScrap = (groupId: number) => {
  const queryClient = useQueryClient();
  return useMutation(postScrap, {
    onMutate: async () => {
      await queryClient.cancelQueries(GroupsKeys.getGroupDetail(groupId));
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
      queryClient.invalidateQueries(GroupsKeys.getGroupDetail(groupId));
    },
  });
};

export const useDeleteScrapGroups = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation(deleteScrap, {
    onMutate: async () => {
      await queryClient.cancelQueries(GroupsKeys.getGroupDetail(groupId));

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
      queryClient.invalidateQueries(GroupsKeys.getGroupDetail(groupId));
    },
  });
};

export const useDeleteScrapMeeting = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation(deleteScrap, {
    onMutate: async () => {
      await queryClient.cancelQueries(MeetingKeys.getMeetingScraps());

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
      queryClient.invalidateQueries(GroupsKeys.getGroupDetail(groupId));
    },
  });
};

export const useDeleteGroupMember = (groupId: number) => {
  const queryClient = useQueryClient();
  const { push } = useAppRouter();

  return useMutation(deleteGroupMember, {
    onSuccess: () => {
      queryClient.resetQueries(GroupsKeys.getGroups());
      queryClient.invalidateQueries(GroupsKeys.getGroupDetail(groupId));
      queryClient.invalidateQueries(GroupsKeys.getGroupMembers(groupId));
      push('/grouping');
    },
  });
};

export const usePostEstimate = () => {
  const { push } = useAppRouter();
  const { open } = useModal({ isUnmountExit: false });

  return useMutation(postEstimate, {
    onSuccess: () => {
      open(({ exit }) => <FeedbackCompleteModal onClose={exit} />);
      push('/meeting/participate?tab=participating');
    },
  });
};
