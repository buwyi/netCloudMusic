import { memo, Suspense } from 'react';
import type { ReactNode, FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './c-cpns/discover-bar';

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};

export default memo(Discover);
