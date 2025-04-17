import { useAppDispatch } from '@/store';
import { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchSettleSingerAction,
  fetchTopListAction,
} from './store';
import TopBanner from './c-cpns/top-banner';
import { RecommendWrapper, RecommendSection, RecommendLeft, RecommendRight } from './style';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import DiscoverToplist from './c-cpns/discover-toplist';
import DiscoverLogin from './c-cpns/discover-login';
import SettleSinger from './c-cpns/settle-singer';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetchHotRecommendAction());
    dispatch(fetchNewAlbumAction());
    dispatch(fetchTopListAction());
    dispatch(fetchSettleSingerAction());
  }, []);
  return (
    <>
      <TopBanner />
      <RecommendSection className="warp-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <DiscoverToplist />
        </RecommendLeft>
        <RecommendRight>
          <DiscoverLogin />
          <SettleSinger />
        </RecommendRight>
      </RecommendSection>
    </>
  );
};

export default memo(Recommend);
