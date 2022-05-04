import styled from "styled-components";

type PropsTitle = {
  isInObservation: boolean
}

export const Display = {
  Area: styled.div `
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.displayCentral.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    opacity: 0.9;
    position: relative;
  `,
  TitleArea: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
    overflow: auto;
  `,
  Title: styled.span<PropsTitle>`
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    border: 1px solid black;
    margin-bottom: 5px;
    background-color: ${({ isInObservation }) => isInObservation ? 'gray' : 'none'};
  `
}