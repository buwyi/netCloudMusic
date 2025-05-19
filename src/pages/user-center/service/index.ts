import hyRequest from '@/service';
import { UserAccount, UserDetail, UserLevel, UserProfile } from '@/types/user-type';

export const getUserAccountInfo = () => {
  return hyRequest.get<{ code: number; account: UserAccount; profile: UserProfile }>({
    url: '/user/account',
  });
};

export const getUserLevelInfo = () => {
  return hyRequest.get<{ full: any; data: UserLevel; code: number }>({
    url: '/user/level',
  });
};

export const getUserDetail = (uid: number) => {
  return hyRequest.get<UserDetail>({
    url: 'user/detail',
    params: {
      uid: uid,
    },
  });
};
