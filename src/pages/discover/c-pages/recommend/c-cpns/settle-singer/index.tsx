import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { SettleSingerWrapper } from './style';
import AreaHeaderV2 from '@/components/area-header-v2';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import { getImageSize } from '@/utils/format';

interface IProps {
  children?: ReactNode;
}

const SettleSinger: FC<IProps> = () => {
  const { settleSingers } = useAppSelector(
    (state) => ({
      settleSingers: state.recommend.settleSinger,
    }),
    shallowEqual,
  );
  return (
    <SettleSingerWrapper>
      <div className="header">
        <AreaHeaderV2 title="入驻歌手" moreText="查看更多 &gt;" moreLink="#/discover/artist" />
      </div>
      <div className="content">
        {settleSingers.map((item) => {
          return (
            <a href="#/discover/artist" className="artist" key={item.id}>
              <img src={getImageSize(item.picUrl, 80)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="/#" className="countingGraphButton">
          申请成为网易云音乐人
        </a>
      </div>
    </SettleSingerWrapper>
  );
};

export default memo(SettleSinger);
