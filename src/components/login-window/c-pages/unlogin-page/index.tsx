import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { UnLoginPageWrapper } from './style';
import { useAppDispatch } from '@/store';
import { fetchShowWindowAction } from '../../store';

interface IProps {
  children?: ReactNode;
}

const UnLoginPage: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const handleButton = () => {
    dispatch(fetchShowWindowAction(true));
  };
  return (
    <UnLoginPageWrapper>
      <div className="bg-image">
        <div className="content">
          <h2></h2>
          <button className="btn" onClick={handleButton}>
            立即登陆
          </button>
        </div>
      </div>
    </UnLoginPageWrapper>
  );
};

export default memo(UnLoginPage);
