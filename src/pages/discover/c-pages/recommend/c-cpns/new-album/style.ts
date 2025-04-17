import styled from 'styled-components';

export const NewAlbumWrapper = styled.div`
  margin-top: 35px;

  > .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .banner {
      flex: 1;
      overflow: hidden;
      /* width: 645px; */

      .album-slice {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
      position: relative;
      top: -12px;
    }

    .arrow-left {
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
  }
`;
