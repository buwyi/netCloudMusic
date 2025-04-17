import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { DiscoverLoginWrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const DiscoverLogin: FC<IProps> = () => {
  return (
    <DiscoverLoginWrapper className="countingGraph02">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="" className="countingGraph02">
        用户登录
      </a>
    </DiscoverLoginWrapper>
  );
};

export default memo(DiscoverLogin);
