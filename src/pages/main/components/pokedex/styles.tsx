import styled from "styled-components";

import Pokedex from '../assets/images/pokedex-complete.png';

export const Container = styled.div`
  width: 800px;
  height: 600px;
  overflow: auto;
`;

export const PokedexArea = {
  Area: styled.div `
    width: 800px;
    height: 600px;
    background-image: url(${Pokedex});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  DisplayAreaCentral: styled.div`
    width: 280px;
    height: 190px;
    position: absolute;
    transform: translate(-205px, -30px);
  `,
  DisplayTopAreaMap: styled.div`
    width: 280px;
    height: 140px;
    position: absolute;
    transform: translate(210px, -53px);
  `,
  DisplayBottomAreaCaracteristics: styled.div`
    width: 280px;
    height: 60px;
    position: absolute;
    transform: translate(210px, 220px);
  `,
  ButtonAreaCentral: styled.div`
    width: 220px;
    height: 120px;
    transform: translate(-100px, 185px);
    position: absolute;
  `,
  ButtonAreaSelect: styled.div`
    width: 68px;
    height: 68px;
    transform: translate(-340px, 150px);
    position: absolute;
  `,
};