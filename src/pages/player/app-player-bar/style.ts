import styled from 'styled-components';
import playerIcon from '@/assets/image/iconall.png';
import progressBar from '@/assets/image/progress_bar.png';
import pip from '@/assets/image/pip.png';

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  /* box-sizing: content-box; */
  .bg {
    background-position: 0 0;
    background-repeat: repeat;
    color: aliceblue;
    height: 52px;
    /* box-sizing: content-box; */
  }

  .context {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`;

interface IPlayerControlWrapper {
  isplaying: boolean;
}
export const PlayerControlWrapper = styled.div<IPlayerControlWrapper>`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
    /* cursor: pointer; */
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isplaying ? '-165px' : '-204px')};
  }

  .next {
    background-position: -80px -130px;
  }
`;

export const PlayerInfoWrapper = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;
    .song {
      display: flex;
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        position: relative;
        top: -3px;
        width: 493px;
        margin-right: 10px;
        .ant-slider-rail {
          height: 9px;
          background: url(${progressBar}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${progressBar}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${playerIcon}) 0 -250px;

          &:before {
            display: none;
          }
          &:after {
            display: none;
          }
        }
      }

      .time {
        display: flex;
        font-size: 12px;
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`;

interface IPlayerOperatorWrapper {
  playMode: number;
}
export const PlayerOperatorWrapper = styled.div<IPlayerOperatorWrapper>`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .pip {
    background: url(${pip});

    &:hover {
      background-position-y: -25px;
    }
  }

  .favor {
    background-position: -88px -163px;

    &:hover {
      background-position: -88px -189px;
    }
  }

  .share {
    background-position: -114px -163px;
    &:hover {
      background-position: -114px -189px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    .volumn {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }

    .loop {
      background-position: ${(props) => {
        switch (props.playMode) {
          case 1:
            return '-66px -248px';
          case 2:
            return '-66px -344px';
          default:
            return '-3px -344px';
        }
      }};
      &:hover {
        background-position: ${(props) => {
          switch (props.playMode) {
            case 1:
              return '-93px -248px';
            case 2:
              return '-93px -344px';
            default:
              return '-33px -344px';
          }
        }};
      }
    }

    .playlist {
      font-size: 12px;
      color: #666;
      padding-left: 18px;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
      }
      text-align: center;
      /* color: #ccc; */
      width: 59px;
    }
  }
`;
