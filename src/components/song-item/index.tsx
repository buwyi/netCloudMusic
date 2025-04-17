import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { SongItemWrapper } from './style';
import { HotRecommend } from '@/pages/discover/c-pages/recommend/store';
import { formatCount, getImageSize } from '@/utils/format';

interface IProps {
  children?: ReactNode;
  itemData: HotRecommend;
}

const SongItem: FC<IProps> = (props) => {
  const { itemData } = props;

  return (
    <SongItemWrapper>
      <div className="cover-top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover countingGraphCover">
          <div className="info countingGraphCover">
            <span>
              <i className="headset countingGraphIcon"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="play countingGraphIcon"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">{itemData.name}</div>
    </SongItemWrapper>
  );
};

export default memo(SongItem);
