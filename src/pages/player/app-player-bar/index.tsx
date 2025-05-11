import { memo, useState, useRef, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import {
  AppPlayerBarWrapper,
  PlayerControlWrapper,
  PlayerInfoWrapper,
  PlayerOperatorWrapper,
} from './style';
import { Slider } from 'antd';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import { getImageSize } from '@/utils/format';
import { shallowEqual } from 'react-redux';
import { formatTime, getPlayerUrl } from '@/utils/handle-player';
import {
  changeLyricIndexAction,
  changePlayModeAction,
  fetchChangeMusicAction,
} from '../store/player';
import AppPlayerBarPlaylist from './app-player-bar-playlist';

interface IProps {
  children?: ReactNode;
}

const AppPlayerBar: FC<IProps> = () => {
  const { currentSong, lyrics, lyricIndex, playMode, playList } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode,
      playList: state.player.playList,
    }),
    shallowEqual,
  );
  const dispatch = useAppDispatch();

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); //百分比
  const [currentTime, setCurrentTime] = useState(0); //秒
  const [duration, setDuration] = useState(0); //毫秒
  const [isVisible, setIsVisible] = useState(false); //设置playlist的可见
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = getPlayerUrl(currentSong.id);
    audioRef.current //currentSong变化则播放
      .play()
      .then(() => {
        console.log('歌曲播放成功');
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log('歌曲播放失败', err);
        setIsPlaying(false);
      });
    setDuration(currentSong.dt);
  }, [currentSong]);

  //播放按钮事件
  const handlePlayBtnClick = () => {
    const isPaused = audioRef.current!.paused;
    isPaused
      ? audioRef.current?.play().catch(() => setIsPlaying(false)) //若播放失败则设置playing失败
      : audioRef.current?.pause();
    setIsPlaying(isPaused);
  };
  //切换歌曲事件
  const handleChangeMusic = (isNext: boolean = true) => {
    dispatch(fetchChangeMusicAction(isNext));
  };
  //切换播放模式按钮事件012
  const handleLoopBtnClick = () => {
    let newPlayMode = playMode + 1;
    if (newPlayMode > 2) newPlayMode = 0;
    dispatch(changePlayModeAction(newPlayMode));
  };
  //歌曲时间更新事件
  const handleTimeUpdate = () => {
    const newCurrentTime = audioRef.current!.currentTime;
    const newProgress = ((newCurrentTime * 1000) / duration) * 100;

    setCurrentTime(newCurrentTime); //修改歌曲当前时间
    setProgress(newProgress); //修改进度条==》slider组件中的progress
    // console.log(currentTime, newCurrentTime);

    //歌词更新
    if (!lyrics.length) return;
    //找到第一条大于当前时间的歌词，需要展示歌词即为它-1
    let index = lyrics.length - 1; //初始值设置为最后一条歌词
    for (let i = 0; i < lyrics.length - 1; i++) {
      if (lyrics[i].time >= newCurrentTime * 1000) {
        index = i - 1;
        break;
      }
    }
    //如果找到同一条则不需要进行更新
    if (lyricIndex == index || index == -1) return;
    //更新
    dispatch(changeLyricIndexAction(index));
    // console.log(lyrics[index].content);
  };
  //歌曲播放结束事件
  const handleTimeEnded = () => {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0;
      audioRef.current!.play();
    } else {
      handleChangeMusic(true);
    }
  };
  //Slider组件进度条变化事件
  const handleSliderChangeComplete = (value: number) => {
    // console.log(value);
    const newCurrentTime = (value / 100) * duration; //毫秒
    audioRef.current!.currentTime = newCurrentTime / 1000;
    setCurrentTime(newCurrentTime / 1000);
    setProgress(value);
  };
  //点击播放列表显示playlist组件事件
  const handleShowPlayListClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <AppPlayerBarWrapper>
      <div className="countingGraphPlayBar bg">
        <div className="context w-[1030px]">
          <PlayerControlWrapper isplaying={isPlaying}>
            <button
              className="btn countingGraphPlayBar prev"
              onClick={() => handleChangeMusic(false)}
            ></button>
            <button className="btn countingGraphPlayBar play" onClick={handlePlayBtnClick}></button>
            <button
              className="btn countingGraphPlayBar next"
              onClick={() => handleChangeMusic()}
            ></button>
          </PlayerControlWrapper>
          <PlayerInfoWrapper>
            <Link to="/artist">
              <img className="image" src={getImageSize(currentSong.al?.picUrl, 100)} alt="" />
            </Link>
            <div className="info">
              <div className="song">
                <span className="name">{currentSong.name}</span>
                <span className="singer">
                  {currentSong.ar.map((item) => {
                    return item.name;
                  })}
                </span>
              </div>
              <div className="progress">
                <Slider
                  step={0.5}
                  tooltip={{ formatter: null }}
                  value={progress}
                  onChange={handleSliderChangeComplete}
                />
                <div className="time">
                  <div className="current">{formatTime(currentTime * 1000)}</div>
                  <div className="divider">/</div>
                  <div className="duration">{formatTime(duration)}</div>
                </div>
              </div>
            </div>
          </PlayerInfoWrapper>
          <PlayerOperatorWrapper playMode={playMode}>
            <div className="left">
              <button className="btn pip"></button>
              <button className="btn countingGraphPlayBar favor"></button>
              <button className="btn countingGraphPlayBar share"></button>
            </div>
            <div className="right countingGraphPlayBar">
              <button className="btn countingGraphPlayBar volumn"></button>
              <button
                className="btn countingGraphPlayBar loop"
                onClick={handleLoopBtnClick}
              ></button>
              <button
                className="btn countingGraphPlayBar playlist"
                onClick={handleShowPlayListClick}
              >
                {playList.length}
              </button>
            </div>
          </PlayerOperatorWrapper>
        </div>
        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded}></audio>
      </div>
      {isVisible && <AppPlayerBarPlaylist setIsVisible={setIsVisible} />}
      {/* <AppPlayerBarPlaylist /> */}
    </AppPlayerBarWrapper>
  );
};

export default memo(AppPlayerBar);
