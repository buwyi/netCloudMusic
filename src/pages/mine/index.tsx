import UnloginPage from '@/components/login-window/c-pages/unlogin-page';
import { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}

const Mine: FC<IProps> = () => {
  return (
    <div>
      <UnloginPage />
    </div>
  );
};

export default memo(Mine);
