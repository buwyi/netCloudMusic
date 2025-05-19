import { memo, useEffect, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { SongPartWrapper } from './style';
import OperatorBar from '@/components/operator-bar';
import { useAppSelector } from '@/store';
import { Song } from '@/types/type';
import { ILyric, parseLyrics } from '@/utils/parser_lyrics';
import { getLyrics } from '@/pages/player/service';

interface IProps {
  children?: ReactNode;
  songInfo: Song;
  commentCount: number;
}

const SongPart: FC<IProps> = (props) => {
  const [lyrics, setLyrics] = useState<ILyric[]>([]);
  const [isExpand, setIsExpand] = useState(false);
  useEffect(() => {
    const fetchLyrics = async () => {
      const res = await getLyrics(songInfo.id);
      setLyrics(parseLyrics(res.lrc?.lyric));
    };
    fetchLyrics();
  });
  const { songInfo, commentCount } = props;
  const fixedCount = 13;
  const fixedLyrics = lyrics.slice(0, fixedCount);
  const extraLyrics = lyrics.slice(fixedCount);
  return (
    <SongPartWrapper>
      <div className="disk-area">
        <div className="u-cover">
          <img src={songInfo.al?.picUrl} alt="" />
          <span className="msk"></span>
        </div>
      </div>
      <div className="info-area">
        <div className="song-info">
          <em className="song-name">{songInfo.name}</em>
          <span className="song-alias">{songInfo.alia}</span>
          <span className="singer">
            歌手：
            <a href="">
              {songInfo.ar?.map((item) => {
                return (
                  <div key={item.id} className="arName">
                    {item.name}
                    <span>/</span>
                  </div>
                );
              })}
            </a>
          </span>
          <span className="album">
            所属专辑:
            <a href="">{songInfo.al?.name}</a>
          </span>
        </div>
        <div className="operators">
          <OperatorBar songInfo={songInfo} commentCount={commentCount} />
        </div>
        <div className="fixedLyrics lyrics">
          {fixedLyrics.map((lyric) => {
            return (
              <div key={lyric.time} className="lyricItem">
                {lyric.content}
              </div>
            );
          })}
        </div>
        {isExpand && (
          <div className="extraLyrics lyrics">
            {extraLyrics.map((lyric) => {
              return (
                <div key={lyric.time} className="lyricItem">
                  {lyric.content}
                </div>
              );
            })}
          </div>
        )}
        {extraLyrics.length > 0 && (
          <div className="toggle-button">
            <button onClick={() => setIsExpand(!isExpand)}>
              {isExpand ? (
                <div>
                  收起
                  <i className="hi"></i>
                </div>
              ) : (
                <div>
                  展开
                  <i className="expand"></i>
                </div>
              )}
            </button>
          </div>
        )}
      </div>
    </SongPartWrapper>
  );
};

export default memo(SongPart);
