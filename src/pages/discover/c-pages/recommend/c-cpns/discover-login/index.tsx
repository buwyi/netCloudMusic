import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { DiscoverLoginWrapper } from './style';
import { useAppDispatch } from '@/store';
import { fetchShowWindowAction } from '@/components/login-window/store';

interface IProps {
  children?: ReactNode;
}

const DiscoverLogin: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const handleLoginButtonAction = () => {
    dispatch(fetchShowWindowAction(true));
  };
  return (
    <DiscoverLoginWrapper className="countingGraph02">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <button className="countingGraph02" onClick={handleLoginButtonAction}>
        用户登录
      </button>
    </DiscoverLoginWrapper>
  );
};

export default memo(DiscoverLogin);
