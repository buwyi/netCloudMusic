import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { DiscoverTopListItemWrapper } from './style';
import { getImageSize } from '@/utils/format';
import { Playlist } from '../../../../../../types/type';
import { useAppDispatch } from '@/store';
import { fetchAddListAction, fetchCurrentSongAction } from '@/pages/player/store/player';
import { Link } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  itemData: Playlist;
}

const DiscoverTopListItem: FC<IProps> = (props) => {
  const playlist = props.itemData;
  const { tracks } = playlist;
  const dispatch = useAppDispatch();

  const handlePlayBtnClick = (id: number) => {
    dispatch(fetchCurrentSongAction(id));
  };
  const handleAddListClick = (id: number) => {
    dispatch(fetchAddListAction(id));
  };
  return (
    <DiscoverTopListItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(playlist.coverImgUrl, 80)} alt="" />
          <a href="" className="countingGraphCover"></a>
        </div>
        <div className="info">
          <a className="name">{playlist.name}</a>
          <button className="countingGraph02 btn play"></button>
          <button className="countingGraph02 btn favor"></button>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <Link to={`/song?id=${item.id}`} className="name">
                  {item.name}
                </Link>
                <div className="operator">
                  <button
                    className="btn play countingGraph02"
                    onClick={() => handlePlayBtnClick(item.id)}
                  ></button>
                  <button
                    className="btn add countingGraphIcon02"
                    onClick={() => handleAddListClick(item.id)}
                  ></button>
                  <button className="btn favor countingGraph02"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="">查看全部 &gt;</a>
      </div>
    </DiscoverTopListItemWrapper>
  );
};

export default memo(DiscoverTopListItem);
