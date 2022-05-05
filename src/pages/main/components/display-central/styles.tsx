import styled from "styled-components";

type PropsTitle = {
  isInObservation: boolean
}

type PropsDisplayArea = {
  selectedPokemon: boolean
}

export const Display = {
  Area: styled.div<PropsDisplayArea> `
    width: 100%;
    height: 100%;
    padding: 5px;
    background-color: ${({ theme }) => theme.displayCentral.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: 1px solid black;
    box-sizing: border-box;
    z-index: -1;
    position: relative;

    .display-central__pokemon-image {
      display: ${({ selectedPokemon }) => selectedPokemon ? 'flex' : 'none'};
      z-index: 1;
      position: absolute;
      background-color: rgba(0,0,0,0.9);
    }
  `,
  TitleArea: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
    overflow: auto;

    ::-webkit-scrollbar {
      display: none;
    }
  `,
  Title: styled.span<PropsTitle>`
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    border: 1px solid black;
    margin-bottom: 5px;
    background-color: ${({ theme, isInObservation }) => isInObservation ? theme.displayCentral.backgroundTitleInObservation : 'none'};
    color: ${({ theme, isInObservation }) => isInObservation ? theme.displayCentral.fontColorTitleInObservation : 'none'};
    font-family: ${({ theme }) => theme.fontStyle[0]};
    font-size: ${({ theme }) => theme.displayCentral.fontSize.small};
  `,
  InfoArea: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}

export const Message =  styled.span`
  font-family: ${({ theme }) => theme.fontStyle[0]};
  font-size: ${({ theme }) => theme.infoMessage.fontSize.medium};
  color: ${({ theme }) => theme.infoMessage.messageColor};
`;
    
