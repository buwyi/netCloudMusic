import { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}

const Artist: FC<IProps> = () => {
  return <div>Artist</div>;
};

export default memo(Artist);
