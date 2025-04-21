import hyRequest from '@/service';

export const getCurrentSongDetail = (ids: number) => {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids,
    },
  });
};

export const getLyrics = (id: number) => {
  return hyRequest.get({
    url: '/lyric',
    params: {
      id,
    },
  });
};
