import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { DiscoverTopWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import DiscoverTopListItem from '../discover-toplist-item';

interface IProps {
  children?: ReactNode;
}

const DiscoverTopList: FC<IProps> = () => {
  const { toplists } = useAppSelector(
    (state) => ({
      toplists: state.recommend.toplists,
    }),
    shallowEqual,
  );
  return (
    <DiscoverTopWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/toplist" />
      <div className="content">
        {toplists.map((item) => {
          return <DiscoverTopListItem key={item.id} itemData={item} />;
        })}
      </div>
    </DiscoverTopWrapper>
  );
};

export default memo(DiscoverTopList);
