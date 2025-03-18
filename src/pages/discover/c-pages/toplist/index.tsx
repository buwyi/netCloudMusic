import { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}

const Toplist: FC<IProps> = () => {
  return <div>Toplist</div>;
};

export default memo(Toplist);
