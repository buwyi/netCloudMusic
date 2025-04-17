import styled from 'styled-components';
import pic from '@/assets/image/download.png';
import btn from '@/assets/image/banner-sprite.png';

export const BannerWrapper = styled.div`
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  position: relative;
  width: 730px;

  /* .swiper-wrapper {
    display: flex;
    overflow: hidden;
  } */

  .banner-item {
    /* flex-shrink: 0; */
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    z-index: 999;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${btn}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }

  /* .slick-slide {
    transition:
      opacity 2000ms,
      visbility 2000ms !important;
  } */
`;

// export const StyleCarousel = styled(Carousel)`
//   :global(.ant-carousel .slick-slide .slick-list .slick-track .slick-slide) {
//     transition:
//       opacity 2000ms,
//       visbility 2000ms;
//   }
// `;

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank',
})`
  width: 254px;
  height: 270px;
  background: url(${pic});
`;
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${btn});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
