import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { DiscoverUserWrapper } from './style';
import { useAppSelector } from '@/store';

interface IProps {
  children?: ReactNode;
}

const DiscoverUser: FC<IProps> = () => {
  const { userProfile, userLevel, Profile } = useAppSelector((state) => ({
    userProfile: state.user.userProfile,
    userLevel: state.user.userLevel,
    Profile: state.user.userDetail.profile,
  }));
  return (
    <DiscoverUserWrapper>
      <div className="user">
        <div className="content">
          <a className="avatar" href="">
            <img src={userProfile.avatarUrl} alt="" />
          </a>
          <div className="info">
            <h4>{userProfile.nickname}</h4>
            <p>
              <a href="">
                {userLevel.level}
                <i className="right"></i>
              </a>
            </p>
            <div className="btnwrap"></div>
          </div>
        </div>
        <ul className="data">
          <li className="post">
            <a href="">
              <strong>{Profile ? Profile.authority : '0'}</strong>
              <span>动态</span>
            </a>
          </li>
          <li className="follow">
            <a href="">
              <strong>{Profile ? Profile.follows : '0'}</strong>
              <span>关注</span>
            </a>
          </li>
          <li className="follower">
            <a href="">
              <strong>{Profile ? Profile.followeds : '0'}</strong>
              <span>粉丝</span>
            </a>
          </li>
        </ul>
      </div>
    </DiscoverUserWrapper>
  );
};

export default memo(DiscoverUser);
