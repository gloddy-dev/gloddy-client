export const getNotificationPath = (type: string, redirectId: number) => {
  let path = '';
  switch (type) {
    case 'APPLY_CREATE': // 모임 신청이 들어온 경우, 모임 관리 페이지 이동
      path = `/grouping/${redirectId}/manage`;
      break;
    case 'APPLY_APPROVE': // 모임 신청이 승인된 경우, 모임 상세정보 이동
      path = `/grouping/${redirectId}?tab=detail`;
      break;
    case 'APPLY_REFUSE': // 모임 신청이 거절된 경우, 모임 상세정보 이동
      path = `/grouping`;
      break;
    case 'GROUP_LEAVE': // 모임 인원이 그룹을 나갔을 때, 모임 상세정보 이동
      path = `/grouping/${redirectId}?tab=detail`;
      break;
    case 'GROUP_ARTICLE_CREATE': // 모임 게시판 글 업로드된 경우, 게시판 이동
      path = `/grouping/${redirectId}?tab=articles`;
      break;
    case 'GROUP_APPROACHING_START': // 모임 1시간 전 알림, 모임 상세정보 이동
      path = `/grouping/${redirectId}?tab=detail`;
      break;
    case 'GROUP_END': // 모임 후 상호평가, 모임 상호평가 페이지로 이동
      path = `/grouping/meeting/participate/feedback/${redirectId}`;
      break;
    // http://localhost:3000/ko/meeting/participate/feedback/68
  }
  return path;
};
