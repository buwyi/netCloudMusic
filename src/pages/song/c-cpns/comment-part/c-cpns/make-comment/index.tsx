import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { MakeCommentWrappper } from './style';

interface IProps {
  children?: ReactNode;
}

const MakeComment: FC<IProps> = () => {
  return <MakeCommentWrappper>makecomment</MakeCommentWrappper>;
};

export default memo(MakeComment);
