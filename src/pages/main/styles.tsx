import styled from 'styled-components';

import grassImageBackground from '../../assets/images/grass.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${grassImageBackground});
  background-size: 100px;
  padding: 10px;
  box-sizing: border-box;
`;