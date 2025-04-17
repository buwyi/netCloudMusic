import { memo, useRef } from 'react';
import type { ReactNode, FC } from 'react';
import { NewAlbumWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { Carousel, GetRef } from 'antd';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import AlbumItem from '@/components/album-item';

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<GetRef<typeof Carousel>>(null);
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbum,
    }),
    shallowEqual,
  );

  const handlePrevClick = () => {
    bannerRef.current?.prev();
  };

  const handleNextClick = () => {
    bannerRef.current?.next();
  };

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button className="countingGraph02 arrow arrow-left" onClick={handlePrevClick}></button>
        <div className="banner">
          <Carousel ref={bannerRef} autoplay dots={false} speed={2000}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-slice" key={item}>
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((singleAlbum) => {
                      return <AlbumItem key={singleAlbum.id} itemData={singleAlbum} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <button className="countingGraph02 arrow arrow-right" onClick={handleNextClick}></button>
      </div>
    </NewAlbumWrapper>
  );
};

export default memo(NewAlbum);
