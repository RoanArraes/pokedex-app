import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px;
  box-sizing: border-box;

  /* @media screen and (max-width: 800px){
    .pokedex__container {
      height: 500px;
    }
  }

  @media screen and (max-width: 500px){
    .pokedex__container {
      height: 300px;
    }
  }

  @media screen and (max-width: 400px){
    .pokedex__container {
      height: 200px;
    }
  } */
`;