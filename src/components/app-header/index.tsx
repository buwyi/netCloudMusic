import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import headerTiltle from '@/assets/data/header-tiltle.json';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './style.css';

interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  const showItem = (item: any) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className="p-[0_19px] text-center leading-[70px] h-[70px] float-left"
        >
          <em className="not-italic">{item.title}</em>
          <sub className="cor countingGraph01">&nbsp;</sub>
        </NavLink>
      );
    } else {
      return (
        <a
          href={item.link}
          target="_blank"
          className="p-[0_19px] text-center leading-[70px] h-[70px] float-left"
        >
          <em className="not-italic">{item.title}</em>
          <sub className="cor countingGraph">&nbsp;</sub>
        </a>
      );
    }
  };

  return (
    <div className="h-[70px] bg-[#242424] text-[14px] text-[#fff] relative z-1000 box-border [border-bottom:1px_solid_#000]">
      <div className="content w-[1100px] mx-auto flex justify-start">
        <h1 className="countingGraph01 float-left w-[176px] h-[69px] m-0 ![background-position:0_0]">
          <a href="/#" className="float-left w-[157px] h-full pr-[20px] -indent-999"></a>
        </h1>
        <ul className="ul-bar float-left block m-0">
          {headerTiltle.map((item) => {
            return (
              <li
                className="item relative float-left h-[70px] text-[14px] [background-position:right_-300px]"
                key={item.title}
              >
                {showItem(item)}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center text-[12px]">
          <div className="search w-[158px] h-[32px] rounded-[16px] text-[12px]">
            <Input placeholder="音乐/视频/电台" prefix={<SearchOutlined />}></Input>
          </div>
          <div className="w-[90px] h-[32px] leading-[32px] text-center [border:1px_solid_#666] rounded-[16px] m-[0_16px]">
            创作者中心
          </div>
          <div className="">登陆</div>
        </div>
      </div>
    </div>
  );
};

export default memo(AppHeader);
