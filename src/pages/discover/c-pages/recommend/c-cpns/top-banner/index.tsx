import { useAppSelector } from '@/store';
import { memo, useRef, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import classNames from 'classnames';

import { shallowEqual } from 'react-redux';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  // 绑定ref
  // const buttonRef = useRef<GetRef<typeof Carousel>>(null);
  const swiperRef = useRef<SwiperClass>(null);

  const [currentIndex, setIndex] = useState(0);

  // 时间绑定函数
  const handleClickPrev = () => {
    let newIndex = (currentIndex - 1 + banners.length) % banners.length;
    swiperRef.current?.slideTo(newIndex);
    setIndex(newIndex);
  };
  const handleClickNext = () => {
    let newIndex = (currentIndex + 1) % banners.length;
    swiperRef.current?.slideTo(newIndex);
    setIndex(newIndex);
  };
  const handleAutoPlay = (swiper: SwiperClass) => {
    setIndex(swiper.activeIndex);
  };
  // const handleAfterChange = (current: number) => {
  //   setIndex(current);
  //   console.log(current, bgImageUrl);
  // };

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqual,
  );

  let bgImageUrl = banners[currentIndex]?.imageUrl;
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20';
  }
  return (
    <>
      <BannerWrapper
        style={{
          background: `url('${bgImageUrl}') center center / 6000px`,
          transition: `0.5s`,
        }}
      >
        <div className="banner warp-v2">
          <BannerLeft>
            <Swiper
              modules={[EffectFade, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              // loop={true}
              // slidesPerView={banners.length}
              effect="fade"
              speed={1000}
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              fadeEffect={{ crossFade: true }}
              onAutoplay={handleAutoPlay}
            >
              {banners.map((item) => {
                return (
                  <SwiperSlide key={item.imageUrl} className="banner-item">
                    <img src={item.imageUrl} alt={item.typeTitle} className="image" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* /*  <Carousel
              autoplay
              dots={false}
              autoplaySpeed={5000}
              ref={buttonRef}
              effect="fade"
              afterChange={handleAfterChange}
              easing="linear"
              // speed={2000}
            >
              {banners.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                );
              })}
            </Carousel> */}
            <ul className="dots">
              {banners.map((item, index) => {
                return (
                  <li key={item.imageUrl}>
                    <span
                      className={classNames('item', {
                        active: index == currentIndex,
                      })}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className="btn left" onClick={handleClickPrev}></button>
            <button className="btn right" onClick={handleClickNext}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </>
  );
};

export default memo(TopBanner);
