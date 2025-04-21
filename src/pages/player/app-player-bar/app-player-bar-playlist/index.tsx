import { memo } from 'react';
import type { ReactNode, FC, SyntheticEvent } from 'react';
import { AppPlayerBarPlayListWrapper } from './style';
import { useAppDispatch, useAppSelector } from '@/store';
import { formatTime } from '@/utils/handle-player';
import classNames from 'classnames';
import { fetchCurrentSongAction } from '../../store/player';

interface IProps {
  children?: ReactNode;
}

const AppPlayerBarPlayList: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { currentSong, playList, playListIndex } = useAppSelector((state) => ({
    playList: state.player.playList,
    playListIndex: state.player.playListIndex,
    currentSong: state.player.currentSong,
  }));

  const handleChangeMusic = (event: SyntheticEvent) => {
    // console.log(event);    //SyntheticEvent 合成事件对象
    const target = event.target as HTMLElement;
    //console.log(target);    //点击的HTML对象，上浮队列的第一个
    const songElement = target.closest('[data-id]');
    //console.log(songElement);   //离点击对象最近的含有data-id属性的对象
    if (!songElement) return;
    const songId = songElement.getAttribute('data-id');
    if (songId) dispatch(fetchCurrentSongAction(parseInt(songId)));
    // // if (!HTMLelement.getAttribute('data-id')) return;
    // // let songId = parseInt(HTMLelement.getAttribute('data-id'));
    // console.log(songId);
    // dispatch(fetchCurrentSongAction(songId));
  };

  return (
    <AppPlayerBarPlayListWrapper>
      <div className="playlist-header">
        <h4>播放列表({playList.length})</h4>
        <button className="favor-all btn">
          <span></span>
          收藏全部
        </button>
        <span className="line"></span>
        <button className="delete-all btn">
          <span></span>
          清除
        </button>
        <p className="song-name">{playList[playListIndex].name}</p>
        <button className="close btn"></button>
      </div>
      <div className="playlist-body">
        <div className="playlist-content">
          <ul className="songs" onClick={handleChangeMusic}>
            {playList.map((item, index) => {
              return (
                <li
                  key={item.id}
                  data-id={item.id}
                  className={classNames({ active: playListIndex === index })}
                >
                  <div className="col col-1">
                    <div className="playicon"></div>
                  </div>
                  <div className="col col-2">{item.name}</div>
                  <div className="col col-3">
                    <div className="icons">
                      <button className="btn delete"></button>
                      <button className="btn download"></button>
                      <button className="btn share"></button>
                      <button className="btn favor"></button>
                    </div>
                  </div>
                  <div className="col col-4">
                    {item.ar.map((item2) => {
                      return (
                        <span key={item2.id}>
                          <a href="">{item2.name}</a>
                        </span>
                      );
                    })}
                  </div>
                  <div className="col col-5">{formatTime(item.dt)}</div>
                  <div className="col col-6">
                    <a href=""></a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="songlyrics">songlyrics</div>
      </div>
    </AppPlayerBarPlayListWrapper>
  );
};

export default memo(AppPlayerBarPlayList);
