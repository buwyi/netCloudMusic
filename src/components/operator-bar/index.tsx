import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { OperatorBarWrapper } from './style';
import { Song } from '@/types/type';
import { useAppDispatch } from '@/store';
import { fetchAddListAction, fetchCurrentSongAction } from '@/pages/player/store/player';

interface IProps {
  children?: ReactNode;
  songInfo: Song;
  commentCount: number;
}

const OperatorBar: FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const { songInfo, commentCount } = props;

  const handlePlayButton = () => {
    dispatch(fetchCurrentSongAction(songInfo.id));
  };
  const handleAddListButton = () => {
    dispatch(fetchAddListAction(songInfo.id));
  };
  return (
    <OperatorBarWrapper>
      <button className="countingGraphButton play" onClick={handlePlayButton}>
        <i className="countingGraphButton">
          <em className="countingGraphButton playIcon" />
          播放
        </i>
      </button>
      <button className="countingGraphButton addList" onClick={handleAddListButton}></button>
      <button className="countingGraphButton favor">
        <i className="countingGraphButton">收藏</i>
      </button>
      <button className="countingGraphButton share">
        <i className="countingGraphButton ">分享</i>
      </button>
      <button className="countingGraphButton download">
        <i className="countingGraphButton">下载</i>
      </button>
      <button className="countingGraphButton comment">
        <i className="countingGraphButton">{`(${commentCount})`}</i>
      </button>
    </OperatorBarWrapper>
  );
};

export default memo(OperatorBar);
