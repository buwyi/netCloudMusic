import { memo, useEffect, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { CommentAreaWrapper } from './style';
import { getSongComment } from '@/pages/song/service';
import { Comment } from '@/types/comment';

interface IProps {
  children?: ReactNode;
  id: number;
  pageIndex: number;
}

const CommentArea: FC<IProps> = (props) => {
  const { id, pageIndex } = props;

  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchIndexComment = async () => {
      const res = await getSongComment(id, 20, pageIndex);
      setComments(res.comments);
    };
    fetchIndexComment();
  }, [pageIndex]);
  return (
    <CommentAreaWrapper>
      <ul>
        {comments.map((item, index) => {
          return <li key={item.commentId}>{item.content}</li>;
        })}
      </ul>
    </CommentAreaWrapper>
  );
};

export default memo(CommentArea);
