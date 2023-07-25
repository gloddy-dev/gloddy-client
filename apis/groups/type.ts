export type GroupResponse = {
  totalCount: number;
  currentCount: number;
  currentPage: number;
  totalPage: number;
  contents: any[];
};

export type CreateGroupRequest = {
  fileUrl: string;
  title: string;
  content: string;
  meetDate: string; // '2021-08-01'
  startTime: string; // '19:00'
  endTime: string; // '21:00'
  place: string;
  place_latitude: string;
  place_longitude: string;
  maxUser: number;
};
