import styled from 'styled-components';
import bg from '@/assets/image/wrap1.png';

export const RecommendWrapper = styled.div``;

export const RecommendSection = styled.div`
  border: 1px solid #d3d3d3;
  width: 980px;
  background-image: url(${bg});
  display: flex;
`;

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
`;

export const RecommendRight = styled.div`
  margin-left: 1px;
  width: 250px;
`;
