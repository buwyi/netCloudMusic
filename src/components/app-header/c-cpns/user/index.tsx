import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { UserWrapper } from './style';
import { Dropdown, Menu, type MenuProps } from 'antd';
import { useAppSelector } from '@/store';
import iconImage from '@/assets/image/toplist.png';

interface IProps {
  children?: ReactNode;
}

interface userDircType {
  link: string;
  label: string;
}

const userDirc: userDircType[] = [
  {
    link: '/',
    label: '我的主页',
  },
  {
    link: '/',
    label: '我的消息',
  },
  {
    link: '/',
    label: '我的等级',
  },
  {
    link: '/',
    label: 'VIP会员',
  },
  {
    link: '/',
    label: '个人设置',
  },
  {
    link: '/',
    label: '实名认证',
  },
  {
    link: '/',
    label: '退出',
  },
];

const itemsFunc = (objects: userDircType[]) => {
  const createLabel = (link: string, label: string) => {
    return (
      <div className="">
        <a href={link} className="h-[24px] leading-[24px] text-[#ccc]! float-left">
          <i className="countingGraphIcon03 [background-position:0_-80px] size-[18px] float-left mt-[3px] mr-[10px]"></i>
          <em className="w-full not-italic text-[12px]">{label}</em>
        </a>
      </div>
    );
  };

  return objects.map((item, index) => {
    return {
      key: index + 1,
      label: createLabel(item?.link, item?.label),
    };
  });
};

const items: MenuProps['items'] = itemsFunc(userDirc);

// const items: MenuProps['items'] = [
//   {
//     key: '1',
//     label: (
//       <div className="">
//         <a href="" className="h-[24px] leading-[24px] text-[#ccc]! float-left">
//           <i className="countingGraphIcon03 [background-position:0_-80px] size-[18px] float-left mt-[3px] mr-[10px]"></i>
//           <em className="w-full not-italic text-[12px]">我的主页</em>
//         </a>
//       </div>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <div className="">
//         <a href="" className="h-[24px] leading-[24px] text-[#ccc]! float-left">
//           <i className="countingGraphIcon03 [background-position:0_-80px] size-[18px] float-left mt-[3px] mr-[10px]"></i>
//           <em className="w-full not-italic text-[12px]">我的消息</em>
//         </a>
//       </div>
//     ),
//   },
//   {
//     key: '3',
//     label: (
//       <div className="">
//         <a href="" className="h-[24px] leading-[24px] text-[#ccc]! float-left">
//           <i className="countingGraphIcon03 [background-position:0_-80px] size-[18px] float-left mt-[3px] mr-[10px]"></i>
//           <em className="w-full not-italic text-[12px]">我的等级</em>
//         </a>
//       </div>
//     ),
//   },
//   {
//     key: '4',
//     label: (
//       <div className="">
//         <a href="" className="h-[24px] leading-[24px] text-[#ccc]! float-left">
//           <i className="countingGraphIcon03 [background-position:0_-80px] size-[18px] float-left mt-[3px] mr-[10px]"></i>
//           <em className="w-full not-italic text-[12px]">VIP会员</em>
//         </a>
//       </div>
//     ),
//   },
//   {
//     type: 'divider',
//   },
//   {
//     key: '5',
//     label: (
//       <div className="">
//         <a href="" className="h-[24px] leading-[24px] text-[#ccc]! float-left">
//           <i className="countingGraphIcon03 [background-position:0_-80px] size-[18px] float-left mt-[3px] mr-[10px]"></i>
//           <em className="w-full not-italic text-[12px]">个人设置</em>
//         </a>
//       </div>
//     ),
//   },
//   {
//     key: '6',
//     label: (
//       <div className="">
//         <a href="" className="h-[24px] leading-[24px] text-[#ccc]! float-left">
//           <i className="countingGraphIcon03 [background-position:0_-80px] size-[18px] float-left mt-[3px] mr-[10px]"></i>
//           <em className="w-full not-italic text-[12px]">实名认证</em>
//         </a>
//       </div>
//     ),
//   },
//   {
//     type: 'divider',
//   },
//   {
//     key: '7',
//     label: (
//       <div className="">
//         <a href="" className="h-[24px] leading-[24px] text-[#ccc]! float-left">
//           <i className="countingGraphIcon03 [background-position:0_-80px] size-[18px] float-left mt-[3px] mr-[10px]"></i>
//           <em className="w-full not-italic text-[12px]">退出</em>
//         </a>
//       </div>
//     ),
//   },
// ];

const menu = <Menu items={items} theme="light" className="bg-[#2b2b2b]! w-[158px]"></Menu>;

const User: FC<IProps> = () => {
  const { profile } = useAppSelector((state) => ({
    profile: state.user.userProfile,
  }));
  return (
    <UserWrapper>
      <Dropdown
        dropdownRender={() => menu}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
        trigger={['click']}
      >
        <img src={profile.avatarUrl} alt="" />
      </Dropdown>
    </UserWrapper>
  );
};

export default memo(User);
