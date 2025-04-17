import { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { AreaHeaderV2Wrapper } from './style';

interface IProps {
  children?: ReactNode;
  title?: string;
  moreText?: string;
  moreLink?: string;
}

const AreaHeaderV2: FC<IProps> = (props) => {
  const { title, moreText, moreLink } = props;
  return (
    <AreaHeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      {moreText && moreLink && (
        <a className="more" href={moreLink}>
          {moreText}
        </a>
      )}
    </AreaHeaderV2Wrapper>
  );
};

export default memo(AreaHeaderV2);
