import styled from "styled-components";

export const Display = {
  Area: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.displayCaracteristics.backgroundColor};
  `
}