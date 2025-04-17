import styled from 'styled-components';

export const AreaHeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keywords {
      display: flex;
      align-items: center;

      .item {
        font-size: 12px;
        color: #666;
        display: flex;
        position: relative;
        top: 2px;
        .text {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
          font-size: 12px;
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .more {
      font-size: 12px;
      color: #666;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
