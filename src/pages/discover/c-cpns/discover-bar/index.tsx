import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavWarpper } from './style';
import { discoverMenu } from '@/assets/data/local-data';

interface IProps {
  children?: ReactNode;
}

const NavBar: FC<IProps> = () => {
  return (
    <>
      <NavWarpper>
        <div className="nav warp-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.link}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </div>
      </NavWarpper>
    </>
  );
};

export default memo(NavBar);
