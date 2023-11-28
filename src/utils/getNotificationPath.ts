export const getNotificationPath = (type: string, redirectId: number) => {
  let path = '';
  switch (type) {
    case 'APPLY_CREATE':
      path = `/grouping/${redirectId}/manage`;
      break;
    case 'APPLY_APPROVE':
      path = `/grouping/${redirectId}`;
      break;
  }
  return path;
};
