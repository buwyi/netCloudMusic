import styled from 'styled-components';

export const SettleSingerWrapper = styled.div`
  margin-top: 15px;

  .header {
    margin-right: 20px;
    margin-left: 20px;
  }

  .content {
    /* padding-right: 20px; */
    margin: 6px 0 14px 20px;
    .artist {
      width: 210px;
      display: flex;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
        object-fit: cover;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 3px 12px;
        border: 1px solid #e9e9e9;
        border-left: none;
        overflow: hidden;

        .name {
          font-size: 14px;
          font-weight: 700;
          color: #000;
        }

        .alias {
          font-size: 12px;
          color: #666;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }

  .apply-for {
    /* margin-top: 12px;
    margin-right: 20px; */

    a {
      margin-left: 20px;
      width: 213px;
      /* padding-right: 5px; */
      font-size: 12px;
      /* color: #333; */
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      /* background-position: right -58px; */

      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;

      &:hover {
        /* background-position: right -182px; */
      }
    }
  }
`;
