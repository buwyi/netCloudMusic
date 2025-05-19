export interface GetComment {
  isMusician: boolean;
  cnum: number;
  userId: number;
  topComments: Comment[];
  moreHot: boolean;
  hotComments: Comment[];
  commentBanner: null;
  code: number;
  comments: Comment[];
  total: number;
  more: boolean;
}

export interface Comment {
  user: User;
  beReplied: BeReplied[];
  pendantData: PendantData | null;
  showFloorComment: ShowFloorComment;
  status: number;
  commentId: number;
  content: string;
  richContent: null;
  contentResource: null;
  time: number;
  timeStr: Date;
  needDisplayTime: boolean;
  likedCount: number;
  expressionUrl: null;
  commentLocationType: number;
  parentCommentId: number;
  decoration: LikeAnimationMap | null;
  repliedMark: null;
  grade: null;
  userBizLevels: null;
  ipLocation: IPLocation;
  owner: boolean;
  medal: null;
  likeAnimationMap: LikeAnimationMap;
  liked: boolean;
}

export interface BeReplied {
  user: User;
  beRepliedCommentId: number;
  content: string;
  richContent: null;
  status: number;
  expressionUrl: null;
  ipLocation: IPLocation;
}

export interface IPLocation {
  ip: null;
  location: string;
  userId: null;
}

export interface User {
  locationInfo: null;
  liveInfo: null;
  anonym: number;
  highlight: boolean;
  avatarDetail: AvatarDetail | null;
  userType: number;
  avatarUrl: string;
  followed: boolean;
  mutual: boolean;
  remarkName: null;
  socialUserId: null;
  vipRights: VipRights | null;
  nickname: string;
  authStatus: number;
  expertTags: null;
  experts: null;
  vipType: number;
  commonIdentity: null;
  userId: number;
  target: null;
}

export interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}

export interface VipRights {
  associator: Associator | null;
  musicPackage: Associator | null;
  redplus: Associator | null;
  redVipAnnualCount: number;
  redVipLevel: number;
  relationType: number;
  memberLogo: null;
  extInfo: null;
}

export interface Associator {
  vipCode: number;
  rights: boolean;
  iconUrl: string;
}

export interface LikeAnimationMap {}

export interface PendantData {
  id: number;
  imageUrl: string;
}

export interface ShowFloorComment {
  replyCount: number;
  comments: null;
  showReplyCount: boolean;
}
