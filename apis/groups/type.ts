export interface Grouping {
  groupId: number;
  imageUrl: string;
  title: string;
  content: string;
  memberCount: number;
  maxUser: number;
  place: string;
  meetDate: string; // '2021-08-01'
  startTime: string; // '19:00'
  endTime: string; // '21:00'
  placeLatitude: string;
  placeLongitude: string;
}

export interface GroupsResponse {
  totalCount: number;
  currentCount: number;
  currentPage: number;
  totalPage: number;
  contents: Grouping[];
}

export interface GroupResponse extends Omit<Grouping, 'groupId'> {
  myGroup: true;
  isCaptain: true;
}

export interface CreateGroupRequest extends Omit<Grouping, 'groupId' | 'memberCount' | 'imageUrl'> {
  fileUrl: string;
}
