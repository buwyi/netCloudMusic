import { memo, useEffect, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { SongWrapper } from './style';
import DiscoverBar from '../discover/c-cpns/discover-bar';
import SongPart from './c-cpns/song-part';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { fetchSongInfoAction } from './store';
import { getSongComment, getSongInfo } from './service';
import type { Song } from '@/types/type';
import CommentPart from './c-cpns/comment-part';

interface IProps {
  children?: ReactNode;
}

const Song: FC<IProps> = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [songInfo, setSongInfo] = useState<Song>({});
  const [commentCount, setCommentCount] = useState<number>(0);

  useEffect(() => {
    // getSongInfo(Number(id)).then((result) => {
    //   setSongInfo(result.songs[0]);
    //   // fn();
    // });

    const fetchSongInfo = async () => {
      const res = await getSongInfo(Number(id));
      setSongInfo(res.songs[0]);
    };
    const fetchCommentCount = async () => {
      const res = await getSongComment(Number(id), 1, 1);
      setCommentCount(res.total);
    };
    fetchSongInfo();
    fetchCommentCount();
  });
  return (
    <>
      <DiscoverBar />
      <SongWrapper>
        <div className="content warp-v2">
          <div className="left-part">
            <SongPart songInfo={songInfo} commentCount={commentCount} />
            <CommentPart id={Number(id)} commentCount={commentCount} />
          </div>
          <div className="right-part">
            <div className="songlist"></div>
            <div className="similar"></div>
            <div className="download"></div>
          </div>
        </div>
      </SongWrapper>
    </>
  );
};

export default memo(Song);
