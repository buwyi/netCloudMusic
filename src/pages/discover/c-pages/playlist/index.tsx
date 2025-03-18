import { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}

const Playlist: FC<IProps> = () => {
  return <div>Playlist</div>;
};

export default memo(Playlist);
