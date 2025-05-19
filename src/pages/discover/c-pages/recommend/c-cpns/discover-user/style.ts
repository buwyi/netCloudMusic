import styled from 'styled-components';
import level from '@/assets/image/icon2.png';
import background from '@/assets/image/index.png';

export const DiscoverUserWrapper = styled.div`
  .user {
    background: url(${background}) 0 -270px;
    height: 165px;
    padding-top: 20px;
    box-sizing: content-box;
    .content {
      box-sizing: content-box;
      display: flex;
      .avatar {
        box-sizing: content-box;
        /* display: flex; */
        float: left;
        width: 80px;
        height: 80px;
        margin-left: 20px;
        padding: 2px;
        background: #fff;
        border: 1px solid #dadada;
        img {
          display: block;
          width: 80px;
          height: 80px;
        }
      }

      .info {
        float: left;
        width: 115px;
        margin-left: 15px;
        padding-top: 3px;
        h4 {
          font-size: 14px;
          cursor: pointer;
          font-weight: bold;
          &:hover {
            text-decoration: underline;
          }
        }

        p {
          font-size: 12px;
          width: 100%;
          margin-top: 2px;
          display: flex;
          a {
            display: inline-block;
            height: 17px;
            overflow: hidden;
            padding-left: 25px;
            line-height: 18px;
            color: #999;
            font-weight: bold;
            font-style: italic;
            background: url(${level}) -130px -64px;
            .right {
              float: right;
              width: 8px;
              height: 17px;
              background: url(${level}) -192px -64px;
            }
          }
        }

        .btnwrap {
          box-sizing: content-box;
          margin-top: 15px;
          position: relative;
          zoom: 1;
          height: 31px;
        }
      }
    }
    .data {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-top: 22px;
      padding: 0 25px;
      color: #666;
      /* box-sizing: content-box; */
      li {
        height: 40px;
        box-sizing: content-box;
        a {
          display: block;
          text-decoration: none;
          strong {
            display: block;
            font-size: 20px;
            font-weight: normal;
            white-space: nowrap;
          }
          span {
            margin-left: 2px;
          }
        }
      }
    }
    .data::after {
      clear: both;
      content: '.';
      display: block;
      height: 0;
      visibility: 0;
    }
  }
`;
