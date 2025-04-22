import styled from 'styled-components';
import headerBG from '@/assets/image/playlist_bg.png';
import playlistIcon from '@/assets/image/playlist.png';

export const AppPlayerBarPlayListWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 47px;
  width: 986px;
  height: 301px;
  margin-left: -493px;
  /* box-sizing: content-box; */
  /* z-index: 9999; */

  .playlist-header {
    background: url(${headerBG});
    height: 41px;
    padding: 0 2px;

    h4 {
      position: absolute;
      left: 25px;
      top: 0;
      height: 39px;
      line-height: 39px;
      font-size: 14px;
      color: #e2e2e2;
      font-weight: bold;
    }

    .favor-all {
      font-size: 12px;
      left: 398px;
      color: #ccc;
      position: absolute;
      top: 12px;
      height: 15px;
      line-height: 15px;
      cursor: pointer;
      span {
        float: left;
        margin: 1px 6px 0 0;
        width: 16px;
        height: 16px;
        background: url(${playlistIcon}) no-repeat -24px 0;
      }

      &:hover {
        text-decoration: underline;
        color: #e2e2e2;
        span {
          background: url(${playlistIcon}) no-repeat -24px -20px;
        }
      }
    }

    .line {
      position: absolute;
      top: 13px;
      left: 477px;
      height: 15px;
      border-left: 1px solid #000;
      border-right: 1px solid #2c2c2c;
    }

    .delete-all {
      font-size: 12px;
      left: 490px;
      color: #ccc;
      position: absolute;
      top: 12px;
      height: 15px;
      line-height: 15px;
      cursor: pointer;
      span {
        float: left;
        margin: 1px 6px 0 0;
        width: 13px;
        height: 16px;
        background: url(${playlistIcon}) no-repeat -51px 0;
      }

      &:hover {
        text-decoration: underline;
        color: #e2e2e2;
        span {
          background: url(${playlistIcon}) no-repeat -51px -20px;
        }
      }
    }

    .song-name {
      position: absolute;
      color: #fff;
      left: 595px;
      top: 0;
      width: 346px;
      text-align: center;
      height: 39px;
      line-height: 39px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .close {
      position: absolute;
      height: 30px;
      width: 30px;
      top: 6px;
      right: 8px;
      overflow: hidden;
      text-indent: -999px;
      cursor: pointer;
      background: url(${playlistIcon}) no-repeat -195px 9px;
      &:hover {
        background: url(${playlistIcon}) no-repeat -195px -21px;
      }
    }
  }

  .playlist-body {
    box-sizing: content-box;
    position: absolute;
    left: 0;
    top: 41px;
    width: 976px;
    height: 260px;
    overflow: hidden;
    background: url(${headerBG}) repeat-y -1014px 0;
    padding: 0 5px;

    .playlist-content {
      position: absolute;
      left: 2px;
      top: 0;
      z-index: 4;
      height: 260px;
      width: 558px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }

      .songs {
        font-size: 12px;
        color: #ccc;
        overflow: hidden;
        .active {
          .col {
            color: #fff;
          }
          .col-1 {
            .playicon {
              /* display: block; */
              visibility: visible;
            }
          }
        }
        li {
          &:hover {
            .col {
              color: #fff;
            }
            .col-3 .icons {
              display: block;
            }
          }
          /* justify-content: space-between;
          display: flex; */
          float: left;
          width: 100%;
          .col {
            box-sizing: content-box;
            color: #666;
            float: left;
            padding-left: 10px;
            height: 28px;
            line-height: 28px;
            overflow: hidden;
            cursor: pointer;
          }

          .col-1 {
            /* width: 10px; */
            .playicon {
              display: block;
              visibility: hidden;
              background: url(${playlistIcon}) no-repeat -182px 0;
              width: 10px;
              height: 13px;
              margin-top: 8px;
            }
          }

          .col-2 {
            width: 256px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .col-3 {
            width: 78px;
            position: relative;
            .icons {
              display: none;
              position: absolute;
              right: 0;
              top: 0;
              width: 100px;
              height: 23px;
              .btn {
                float: right;
                overflow: hidden;
                margin: 7px 0 0 10px;
                text-indent: -9999px;
                height: 16px;
                cursor: pointer;
              }
              .delete {
                width: 13px;
                background: url(${playlistIcon}) no-repeat -51px 0;
                &:hover {
                  background: url(${playlistIcon}) no-repeat -51px -20px;
                }
              }
              .download {
                width: 14px;
                background: url(${playlistIcon}) no-repeat -57px -50px;
                &:hover {
                  background: url(${playlistIcon}) no-repeat -80px -50px;
                }
              }
              .share {
                width: 14px;
                background: url(${playlistIcon}) no-repeat 0 0;
                &:hover {
                  background: url(${playlistIcon}) no-repeat 0 -20px;
                }
              }
              .favor {
                width: 16px;
                background: url(${playlistIcon}) no-repeat -24px 0;
                &:hover {
                  background: url(${playlistIcon}) no-repeat -24px -20px;
                }
              }
            }
          }

          .col-4 {
            width: 70px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            a {
              &:hover {
                cursor: pointer;
                text-decoration: underline;
              }
            }
          }

          .col-5 {
            width: 35px;
          }

          .col-6 {
            width: 37px;
            padding-left: 6px;
            a {
              background: url(${playlistIcon}) no-repeat -100px 0;
              float: right;
              margin: 7px 0 0 10px;
              height: 16px;
              width: 14px;
              cursor: default;
            }
          }
        }
      }
    }

    .songlyrics {
      /* position: relative;
      flex: 2; */
      position: absolute;
      right: 40px;
      top: 0;
      height: 219px;
      width: 354px;
      margin: 21px 0 20px 0;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      .lyrics-content {
        .lrc-item {
          font-size: 12px;
          height: 32px;
          text-align: center;
          color: #989898;
          &.active {
            color: #fff;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
