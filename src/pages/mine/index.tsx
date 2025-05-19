import UnloginPage from '@/components/login-window/c-pages/unlogin-page';
import { useAppSelector } from '@/store';
import { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}

const Mine: FC<IProps> = () => {
  const { isLogin } = useAppSelector((state) => ({
    isLogin: state.login.isLogin,
  }));
  return <div>{isLogin ? <div>islogin</div> : <UnloginPage />}</div>;
};

export default memo(Mine);
