import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { AreaHeaderWrapper } from './style';
import { Link } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const { title = '默认标题', keywords = [], moreText = '更多', moreLink = '/' } = props;
  return (
    <AreaHeaderWrapper className="countingGraph02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={keywords[index]}>
                <div className="text">{item}</div>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink} className="more">
          {moreText}
        </Link>
        <i className="icon countingGraph02"></i>
      </div>
    </AreaHeaderWrapper>
  );
};

export default memo(AreaHeaderV1);
