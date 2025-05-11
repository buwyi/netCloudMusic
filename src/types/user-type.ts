export interface UserPoint {
  userId: number;
  balance: number;
  updateTime: number;
  version: number;
  status: number;
  blockBalance: number;
}

export interface PrivacyItemUnlimit {
  area: boolean;
  college: boolean;
  gender: boolean;
  age: boolean;
  villageAge: boolean;
}

export interface Expert {}

export interface Profile {
  privacyItemUnlimit: PrivacyItemUnlimit;
  avatarDetail?: any;
  birthday: number;
  mutual: boolean;
  remarkName?: any;
  createTime: number;
  accountStatus: number;
  authStatus: number;
  avatarImgId: number;
  avatarUrl: string;
  backgroundImgId: number;
  backgroundUrl: string;
  city: number;
  detailDescription: string;
  djStatus: number;
  expertTags?: any;
  followed: boolean;
  gender: number;
  nickname: string;
  province: number;
  userType: number;
  vipType: number;
  defaultAvatar: boolean;
  experts: Expert;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  description: string;
  userId: number;
  signature: string;
  authority: number;
  followeds: number;
  follows: number;
  blacklist: boolean;
  eventCount: number;
  allSubscribedCount: number;
  playlistBeSubscribedCount: number;
  followTime?: any;
  followMe: boolean;
  artistIdentity: any[];
  cCount: number;
  inBlacklist: boolean;
  sDJPCount: number;
  playlistCount: number;
  sCount: number;
  newFollows: number;
}

export interface Binding {
  expiresIn: number;
  refreshTime: number;
  bindingTime: number;
  tokenJsonStr?: any;
  url: string;
  expired: boolean;
  userId: number;
  id: number;
  type: number;
}

export interface ProfileVillageInfo {
  title: string;
  imageUrl?: any;
  targetUrl: string;
}

export interface UserInfo {
  level: number;
  listenSongs: number;
  userPoint: UserPoint;
  mobileSign: boolean;
  pcSign: boolean;
  profile: Profile;
  peopleCanSeeMyPlayRecord: boolean;
  bindings: Binding[];
  adValid: boolean;
  code: number;
  newUser: boolean;
  recallUser: boolean;
  createTime: number;
  createDays: number;
  profileVillageInfo: ProfileVillageInfo;
}
export interface UserProfile {
  userId: number;
  userType: number;
  nickname: string;
  avatarImgId: number;
  avatarUrl: string;
  backgroundImgId: number;
  backgroundUrl: string;
  signature: null;
  createTime: number;
  userName: string;
  accountType: number;
  shortUserName: string;
  birthday: number;
  authority: number;
  gender: number;
  accountStatus: number;
  province: number;
  city: number;
  authStatus: number;
  description: null;
  detailDescription: null;
  defaultAvatar: boolean;
  expertTags: null;
  experts: null;
  djStatus: number;
  locationStatus: number;
  vipType: number;
  followed: boolean;
  mutual: boolean;
  authenticated: boolean;
  lastLoginTime: number;
  lastLoginIP: string;
  remarkName: null;
  viptypeVersion: number;
  authenticationTypes: number;
  avatarDetail: null;
  anchor: boolean;
}
export interface UserAccount {
  id: number;
  userName: string;
  type: number;
  status: number;
  whitelistAuthority: number;
  createTime: number;
  tokenVersion: number;
  ban: number;
  baoyueVersion: number;
  donateVersion: number;
  vipType: number;
  anonimousUser: boolean;
  paidFee: boolean;
}
