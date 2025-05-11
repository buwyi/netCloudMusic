import hyRequest from '@/service';
import { UserAccount, UserProfile } from '@/types/user-type';

export const getUserAccountInfo = () => {
  return hyRequest.get<{ code: number; account: UserAccount; profile: UserProfile }>({
    url: '/user/account',
  });
};
