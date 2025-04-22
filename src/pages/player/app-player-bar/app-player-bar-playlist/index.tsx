import { memo, useEffect, useRef } from 'react';
import type { ReactNode, FC, SyntheticEvent } from 'react';
import { AppPlayerBarPlayListWrapper } from './style';
import { useAppDispatch, useAppSelector } from '@/store';
import { formatTime } from '@/utils/handle-player';
import classNames from 'classnames';
import { fetchCurrentSongAction, fetchDeleteSongAction } from '../../store/player';
import { shallowEqual } from 'react-redux';
import { scrollTo } from '@/utils/ui-helper';

interface IProps {
  children?: ReactNode;
}

const AppPlayerBarPlayList: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { currentSong, playList, playListIndex, lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      playList: state.player.playList,
      playListIndex: state.player.playListIndex,
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
    }),
    shallowEqual,
  );

  const lyricRef = useRef<HTMLDivElement>(null);

  // 当歌词序号变化时，触发歌词滚动
  useEffect(() => {
    if (lyricIndex > 0 && lyricIndex < 3) return;
    if (lyricRef.current) scrollTo(lyricRef.current, (lyricIndex - 3) * 32, 300); //小于三号不滚 ,32px行高, 300ms动画时间
  }, [lyricIndex]);

  //播放列表中点击歌曲事件 && 四个图标按钮事件也在这里（事件委托， 将ul => li 中的每个li的事件绑定在ul上， 减少响应函数数量）
  const handleChangeMusic = (event: SyntheticEvent) => {
    // console.log(event);    //SyntheticEvent 合成事件对象
    const target = event.target as HTMLElement;
    //console.log(target);    //点击的HTML对象，上浮队列的第一个
    const buttonElement = target.closest('button.btn');
    // console.log(buttonElement);
    const songElement = target.closest('[data-id]');
    // console.log(songElement); //离点击对象最近的含有data-id属性的对象
    if (!songElement) return;
    const songId = songElement.getAttribute('data-id'); //获取点击单曲的id
    if (!songId) return;

    //点击的区域是否为按钮
    if (buttonElement) {
      event.stopPropagation();
      const action = buttonElement.classList.contains('delete')
        ? 'delete'
        : buttonElement.classList.contains('download')
          ? 'download'
          : buttonElement.classList.contains('favor')
            ? 'favor'
            : buttonElement.classList.contains('share')
              ? 'share'
              : null;

      if (!action) return;

      switch (action) {
        case 'delete':
          dispatch(fetchDeleteSongAction(parseInt(songId)));
          console.log(`delete ${songId}`);
          break;
        case 'download':
          console.log(`download${songId}`);
          break;
        case 'favor':
          console.log(`favor${songId}`);
          break;
        case 'share':
          console.log(`share${songId}`);
          break;
      }
      return;
    }
    dispatch(fetchCurrentSongAction(parseInt(songId)));
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
        <div className="songlyrics" ref={lyricRef}>
          <div className="lyrics-content">
            {lyrics.map((item, index) => {
              return (
                <div
                  className={classNames('lrc-item', { active: index === lyricIndex })}
                  key={item.time}
                >
                  {item.content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppPlayerBarPlayListWrapper>
  );
};

export default memo(AppPlayerBarPlayList);
