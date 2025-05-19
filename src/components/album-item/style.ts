import styled from 'styled-components';

export const AlbumItemWrapper = styled.div`
  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .bottom {
    cursor: pointer;
    margin-top: 10px;
    font-size: 12px;
    width: 100px;

    &:hover {
      .name {
        text-decoration: underline;
      }
    }
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
