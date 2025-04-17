import { memo } from 'react';
import type { ReactNode, FC } from 'react';

import { HotRecommendList } from './styled';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import SongItem from '@/components/song-item';

interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommend,
    }),
    shallowEqual,
  );

  return (
    <>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/playlist"
      />
      <HotRecommendList>
        {hotRecommends.map((item) => {
          return <SongItem key={item.id} itemData={item} />;
        })}
      </HotRecommendList>
    </>
  );
};

export default memo(HotRecommend);
