import styled from 'styled-components';
import cross from '@/assets/image/cross.png';

export const LoginWindowWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .window {
    /* display: flex; */
    position: relative;
    width: 530px;
    border-radius: 4px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
    border: none;

    z-index: 9998;
    .header {
      position: relative;
      margin: 0;
      padding: 0 45px 0 18px;
      height: 38px;
      line-height: 38px;
      border-bottom: 1px solid #191919;
      border-radius: 4px 4px 0 0;
      background: #2d2d2d;
      font-weight: bold;
      font-size: 14px;
      color: #fff;

      .cross {
        position: absolute;
        top: 16px;
        right: 20px;
        width: 10px;
        height: 10px;
        overflow: hidden;
        cursor: pointer;
        background: url(${cross}) 0 -95px;
      }
    }
    .content {
      display: flex;
      /* z-index: 9998; */
      flex-direction: column;
      margin: auto;
      padding: 0;
      border: 1px solid #d8d8d8;
      border-width: 0 1px 1px;
      border-radius: 0 0 4px 4px;
      background: #fff;
      box-sizing: content-box;
      align-items: center;
      justify-content: center;
      height: 306px;
    }
  }
`;
