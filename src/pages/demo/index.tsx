import { memo } from 'react';
import type { ReactNode, FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Download: FC<IProps> = () => {
  return <div>name</div>;
};

export default memo(Download);
