import { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}

const AppFooter: FC<IProps> = () => {
  return (
    <>
      <h2>App-footer</h2>
    </>
  );
};

export default memo(AppFooter);
