import hyRequest from '@/service';
import { GetComment } from '@/types/comment';

export const getSongInfo = (ids: number) => {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids,
    },
  });
};

export const getSongComment = (id: number, limit: number = 20, offset: number) => {
  return hyRequest.get<GetComment>({
    url: '/comment/music',
    params: {
      id,
      limit,
      offset,
    },
  });
};
