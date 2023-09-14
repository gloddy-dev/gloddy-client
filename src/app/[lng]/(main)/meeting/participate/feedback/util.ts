import type { EstimateRequest, EstimateResponse } from '@/apis/groups';

export const convertShowMember = (
  currentMember: EstimateRequest['payload']['praiseInfos'],
  totalMember: EstimateResponse['groupMemberList']
) => {
  const noShowMemberUserIdList = currentMember
    .filter((it) => it.praiseValue === '불참')
    .map((it) => it.userId);
  const showMemberList = totalMember.filter((it) => !noShowMemberUserIdList.includes(it.userId));
  return showMemberList;
};
