import { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import hyRequest from '@/service';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  useEffect(() => {
    hyRequest
      .get({
        url: '/banner',
      })
      .then(console.log);
  });

  return <div>Recommend</div>;
};

export default memo(Recommend);
