import styled from 'styled-components';

export const DiscoverTopListItemWrapper = styled.div`
  /* flex: 1; */
  width: 230px;
  &:last-child {
    width: 228px;
  }

  .header {
    height: 100px;
    display: flex;

    margin: 20px 0 0 20px;

    .image {
      /* display: flex; */
      width: 80px;
      height: 80px;
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }

      a {
        cursor: pointer;
        /* display: flex; */
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-position: -145px -57px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      .name {
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }

      a {
        display: flex;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;

        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        background-position: -300px -205px;

        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .list {
    .item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;
      font-size: 12px;

      &:nth-child(-n + 3) .index {
        color: #c10d0c;
      }

      .index {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
        /* color: #c10d0c; */
      }

      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .operator {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .add {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }

      &:hover {
        .operator {
          display: block;
        }
      }
    }
  }

  .footer {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 32px;
    padding-right: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
