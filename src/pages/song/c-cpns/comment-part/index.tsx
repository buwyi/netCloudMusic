import { memo, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { CommentPartWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import MakeComment from './c-cpns/make-comment';
import CommentArea from './c-cpns/comment-area';
import { Pagination } from 'antd';

interface IProps {
  children?: ReactNode;
  id: number;
  commentCount: number;
}

const CommentPart: FC<IProps> = (props) => {
  const { id, commentCount } = props;
  const [pageIndex, setPageIndex] = useState<number>(1);
  const handleChangePageIndex = (page: number, pageSize: number) => {
    setPageIndex(page);
    // console.log(page);
    // console.log(pageIndex);
  };
  return (
    <CommentPartWrapper>
      <AreaHeaderV1 title="评论" keywords={[`共${commentCount}条`]} />
      <MakeComment />
      <CommentArea id={id} pageIndex={pageIndex}/>
      <Pagination
        total={commentCount}
        showSizeChanger={false}
        defaultPageSize={20}
        hideOnSinglePage={true}
        defaultCurrent={1}
        onChange={handleChangePageIndex}
      />
    </CommentPartWrapper>
  );
};

export default memo(CommentPart);
