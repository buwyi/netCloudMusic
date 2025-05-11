import styled from 'styled-components';
import bgimage from '@/assets/image/mymusic.png';

export const UnLoginPageWrapper = styled.div`
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .bg-image {
    box-sizing: content-box;
    width: 807px;
    height: 268px;
    margin: 0 auto 0;
    padding-top: 104px;
    background: url(${bgimage}) 0 9999px;
    background-position: 0 104px;
    background-clip: content-box;
    overflow: hidden;
    h2 {
      height: 100px;
    }
    .btn {
      display: block;
      width: 167px;
      height: 45px;
      margin: 102px 0 0 482px;
      text-indent: -9999px;
      &:hover {
        background: url(${bgimage}) 0 -278px;
      }
    }
  }
`;
