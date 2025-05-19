import styled from 'styled-components';
import msk from '@/assets/image/coverall.png';
import icon from '@/assets/image/icon.png';

export const SongPartWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */

  .disk-area {
    width: 25%;
    .u-cover {
      img {
        margin: 34px;
        width: 130px;
        height: 130px;
      }
      .msk {
        display: block;
        position: relative;
        width: 206px;
        height: 205px;
        top: -202px;
        left: -4px;
        background: url(${msk}) -140px -580px;
      }
    }
  }

  .info-area {
    flex: 1;
    margin-left: 50px;
    .song-info {
      /* display: block; */
      .song-name {
        display: block;
        font-size: 24px;
        font-style: normal;
      }
      .song-alias {
        color: #bababa;
        font-size: 14px;
      }
      .singer {
        margin-top: 10px;
        display: block;
        color: #bababa;
        a {
          color: #0c73c2;
          display: inline-flex;
          div {
            span {
              color: #333;
              font-size: 10px;
              margin: 0 2px;
            }
            &:last-child {
              span {
                visibility: hidden;
              }
            }
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .album {
        margin-top: 10px;
        display: block;
        color: #bababa;
        a {
          color: #0c73c2;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .operators {
      margin-top: 10px;
    }

    .lyrics {
      height: auto;
      line-height: 23px;
      font-size: 12px;
      color: #333;
    }

    .fixedLyrics {
      margin-top: 43px;
    }

    .toggle-button button {
      background: none;
      color: #1a73e8;
      cursor: pointer;
      font-size: 12px;
      /* text-decoration: underline; */
      &:hover {
        text-decoration: underline;
      }
      div {
        display: flex;
        align-items: center;
        .hi {
          width: 11px;
          height: 8px;
          background: url(${icon}) no-repeat -45px -520px;
        }
        .expand {
          width: 11px;
          height: 8px;
          background: url(${icon}) no-repeat -65px -520px;
        }
      }
    }
  }
`;
