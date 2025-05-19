import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { CommentItemWrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const CommentItem: FC<IProps> = () => {
  return <CommentItemWrapper>commentItem</CommentItemWrapper>;
};

export default memo(CommentItem);
