import styled from "styled-components";

export const Display = {
  Area: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 2px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.displayCaracteristics.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  BargraphArea: styled.div`
    width: 50px;
    height: 100%;
    padding: 2px;
    box-sizing: border-box;
  `,
}