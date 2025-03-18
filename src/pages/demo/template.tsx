import { memo } from 'react';
import type { ReactNode, FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Template: FC<IProps> = () => {
  return <div>Template</div>;
};

export default memo(Template);
