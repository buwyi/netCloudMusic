import styled from 'styled-components';

export const DiscoverLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 22px;
    color: #666;
    font-size: 12px;
  }

  button {
    margin-top: 16px;
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;
    font-size: 12px;
  }

  :hover {
    background-position: -110px -195px;
  }
`;
