import styled from 'styled-components';

export const OperatorBarWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  .play {
    /* display: flex; */
    height: 31px;
    background-position: right -428px;
    i {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 7px 0 9px;
      background-position: 0 -387px;
      color: #fff;
      font-style: normal;
      .playIcon {
        margin-right: 2px;
        display: inline-block;
        width: 20px;
        height: 18px;
        background-position: 0 -1622px;
      }
    }
    &:hover {
      background-position: right -510px;
      i {
        background-position: right -469px;
      }
    }
    &:active {
      background-position: right -592px;
      i {
        background-position: 0 -551px;
      }
    }
  }

  .addList {
    margin-right: 5px;
    width: 31px;
    height: 31px;
    background-position: 0 -1588px;
    &:hover {
      background-position: -40px -1588px;
    }
    &:active {
      background-position: -80px -1588px;
    }
  }
  .favor {
    height: 31px;
    background-position: right -1020px;
    padding-right: 5px;
    min-width: 23px;
    color: #333;
    margin-right: 5px;
    i {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 7px 0 28px;
      background-position: 0 -977px;
      color: #333;
      font-style: normal;
    }
    &:hover {
      background-position: right -1106px;
      i {
        background-position: 0 -1063px;
      }
    }
  }
  .share {
    height: 31px;
    background-position: right -1106px;
    padding-right: 5px;
    min-width: 23px;
    color: #333;
    margin-right: 5px;
    i {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 7px 0 28px;
      background-position: 0 -1225px;
      color: #333;
      font-style: normal;
    }
    &:hover {
      background-position: right -1106px;
      i {
        background-position: 0 -1268px;
      }
    }
  }
  .download {
    height: 31px;
    background-position: right -1020px;
    padding-right: 5px;
    min-width: 23px;
    color: #333;
    margin-right: 5px;
    i {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 7px 0 28px;
      background-position: 0 -2761px;
      color: #333;
      font-style: normal;
    }
    &:hover {
      background-position: right -1106px;
      i {
        background-position: 0 -2805px;
      }
    }
  }
  .comment {
    height: 31px;
    background-position: right -1020px;
    padding-right: 5px;
    min-width: 23px;
    color: #333;
    i {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 7px 0 28px;
      background-position: 0 -1465px;
      color: #333;
      font-style: normal;
    }
    &:hover {
      background-position: right -1106px;
      i {
        background-position: 0 -1508px;
      }
    }
  }
`;
